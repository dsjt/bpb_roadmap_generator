// PREDEFINED_ITEMS は items.js で定義済み
// ============================================================
// State
// ============================================================
let state = {
  roadmaps: [],            // [{ id, label, placements: [{ instanceId, itemId, col }] }]
  selectedRoadmapIds: [], // 選択中（エクスポート対象）のロードマップID一覧
  customItems: [],
  roundCount: 10,
};

function defaultRoadmap() {
  return { id: 'r_' + uid(), label: 'ロードマップ', placements: [] };
}

function getSelectedRoadmaps() {
  return state.roadmaps.filter(r => state.selectedRoadmapIds.includes(r.id));
}

// ============================================================
// Persistence – localStorage
// ============================================================
const STORAGE_KEY = 'bpb_roadmap_v1';

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      roadmaps: state.roadmaps,
      selectedRoadmapIds: state.selectedRoadmapIds,
      customItems: state.customItems,
      roundCount: state.roundCount,
    }));
  } catch (_) {}
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    // 旧フォーマット（placements がトップレベル）からの移行
    if (saved.placements) {
      state.roadmaps = [{ id: 'r_' + uid(), label: 'ロードマップ', placements: saved.placements }];
    } else {
      state.roadmaps = saved.roadmaps || [defaultRoadmap()];
    }
    // selectedRoadmapId（旧単一）→ selectedRoadmapIds（新複数）へ移行
    if (saved.selectedRoadmapIds) {
      state.selectedRoadmapIds = saved.selectedRoadmapIds;
    } else if (saved.selectedRoadmapId) {
      state.selectedRoadmapIds = [saved.selectedRoadmapId];
    } else {
      state.selectedRoadmapIds = state.roadmaps.map(r => r.id);
    }
    state.customItems = saved.customItems || [];
    state.roundCount = saved.roundCount || 10;
  } catch (_) {}
}

// ============================================================
// Image storage – localStorage (keyed by itemId)
// ============================================================
function saveImage(itemId, dataUrl) {
  try { localStorage.setItem('bpb_img_' + itemId, dataUrl); } catch (_) {}
}
function getImage(itemId) {
  return localStorage.getItem('bpb_img_' + itemId);
}

// ============================================================
// URL encode / decode
// ============================================================
function encodeStateToUrl() {
  const selected = getSelectedRoadmaps();
  const data = {
    roadmaps: selected.map(rm => ({
      p: rm.placements.map(pl => [pl.itemId, pl.col]),
      l: rm.label,
    })),
    c: state.customItems.map(ci => [ci.id, ci.name]),
    r: state.roundCount,
  };
  return btoa(encodeURIComponent(JSON.stringify(data)));
}

function decodeStateFromUrl(encoded) {
  try {
    const data = JSON.parse(decodeURIComponent(atob(encoded)));
    state.customItems = (data.c || []).map(([id, name]) => ({ id, name }));
    state.roundCount = data.r || 10;
    if (data.roadmaps) {
      // 新フォーマット（複数ロードマップ）
      state.roadmaps = data.roadmaps.map(rm => ({
        id: 'r_' + uid(),
        label: rm.l || 'ロードマップ',
        placements: (rm.p || []).map(([itemId, col]) => ({ instanceId: uid(), itemId, col })),
      }));
    } else {
      // 旧フォーマット（単一ロードマップ）
      state.roadmaps = [{
        id: 'r_' + uid(),
        label: data.l || 'ロードマップ',
        placements: (data.p || []).map(([itemId, col]) => ({ instanceId: uid(), itemId, col })),
      }];
    }
    state.selectedRoadmapIds = state.roadmaps.map(r => r.id);
  } catch (_) {}
}

// ============================================================
// Helpers
// ============================================================
function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function getAllItems() {
  return [...state.customItems, ...PREDEFINED_ITEMS];
}

function getItemById(id) {
  return getAllItems().find(item => item.id === id) || null;
}

// ============================================================
// Folder image
// ============================================================
function folderImageUrl(itemName) {
  return `images/${encodeURIComponent(itemName)}.png`;
}

// img要素を生成し、フォルダ画像の読み込みを試みる。
// 成功すればonLoad()、失敗しても何もしない（呼び出し側でフォールバックを用意すること）
function tryFolderImage(itemName, imgClass, onLoad) {
  const img = document.createElement('img');
  img.className = imgClass;
  img.alt = '';
  img.style.display = 'none';
  img.onload = () => onLoad(img);
  img.src = folderImageUrl(itemName);
  return img;
}

// ============================================================
// Drag source tracker
// ============================================================
let dragSource = null; // { type: 'palette', itemId } | { type: 'cell', instanceId }
let dragDropHandled = false; // セルへのドロップが成立したかどうか

// ============================================================
// Palette rendering
// ============================================================
let searchQuery = '';
const rarityFilters = new Set(); // 空 = フィルターなし（全て表示）
const ALL_RARITIES = ['common', 'rare', 'epic', 'legendary', 'god', 'unique'];
const classFilters = new Set(); // 空 = フィルターなし（全て表示）
const ALL_CLASSES = ['ranger', 'reaper', 'pyromancer', 'berserker', 'mage', 'adventurer', 'engineer'];

function updateRarityBtns() {
  document.querySelectorAll('.rarity-btn').forEach(btn => {
    const r = btn.dataset.rarity;
    btn.classList.toggle('active', r === '' ? rarityFilters.size === 0 : rarityFilters.has(r));
  });
}

function updateClassBtns() {
  document.querySelectorAll('.class-btn').forEach(btn => {
    const c = btn.dataset.class;
    btn.classList.toggle('active', c === '' ? classFilters.size === 0 : classFilters.has(c));
  });
}

function matchesClassFilter(item) {
  if (classFilters.size === 0) return true;
  for (const cf of classFilters) {
    if (cf === 'common') {
      if (Array.isArray(item.classes) && item.classes.length === 0) return true;
    } else {
      if (Array.isArray(item.classes) && item.classes.includes(cf)) return true;
    }
  }
  return false;
}

function renderPalette() {
  const list = document.getElementById('palette-list');
  const q = searchQuery.trim();
  const items = getAllItems().filter(item => {
    if (q !== '' && !item.name.includes(q)) return false;
    if (rarityFilters.size > 0 && !rarityFilters.has(item.rarity)) return false;
    if (!matchesClassFilter(item)) return false;
    return true;
  });

  list.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'palette-item' + (item.id.startsWith('c_') ? ' is-custom' : '');
    li.draggable = true;
    li.dataset.itemId = item.id;

    const imgSrc = getImage(item.id);
    const thumb = imgSrc
      ? `<div class="palette-thumb-wrap"><img class="palette-thumb" src="${imgSrc}" alt=""><button class="palette-img-remove" title="画像を削除" tabindex="-1">×</button></div>`
      : `<div class="palette-thumb-wrap"><div class="palette-avatar">${item.name.charAt(0)}</div></div>`;

    li.innerHTML = `
      ${thumb}
      <span class="palette-name" title="${item.name}">${item.name}</span>
      <button class="palette-upload-btn" title="画像を設定" tabindex="-1">📷</button>
    `;

    // localStorage画像がなければフォルダ画像を試みる
    if (!imgSrc) {
      const wrap = li.querySelector('.palette-thumb-wrap');
      const avatar = wrap.querySelector('.palette-avatar');
      wrap.appendChild(tryFolderImage(item.name, 'palette-thumb', img => {
        avatar.style.display = 'none';
        img.style.display = 'block';
      }));
    }

    li.addEventListener('dragstart', e => {
      dragSource = { type: 'palette', itemId: item.id };
      e.dataTransfer.setData('text/plain', item.id);
      e.dataTransfer.effectAllowed = 'copy';
      li.classList.add('dragging');
    });
    li.addEventListener('dragend', () => {
      dragSource = null;
      li.classList.remove('dragging');
    });

    li.querySelector('.palette-upload-btn').addEventListener('click', e => {
      e.stopPropagation();
      triggerImageUpload(item.id);
    });

    const removeBtn = li.querySelector('.palette-img-remove');
    if (removeBtn) {
      removeBtn.addEventListener('click', e => {
        e.stopPropagation();
        localStorage.removeItem('bpb_img_' + item.id);
        renderPalette();
        renderGrid();
      });
    }

    list.appendChild(li);
  });
  updateRarityBtns();
  updateClassBtns();
}

// ============================================================
// Grid rendering
// ============================================================
function renderGrid() {
  const container = document.getElementById('roadmap-blocks');
  container.innerHTML = '';
  state.roadmaps.forEach(roadmap => container.appendChild(createRoadmapBlock(roadmap)));
  updateSelectAllBtn();
}

function createRoadmapBlock(roadmap) {
  const isSelected = state.selectedRoadmapIds.includes(roadmap.id);
  const block = document.createElement('div');
  block.className = 'roadmap-block' + (isSelected ? ' selected' : '');
  block.dataset.roadmapId = roadmap.id;

  // Header
  const header = document.createElement('div');
  header.className = 'roadmap-block-header';

  const toggle = document.createElement('button');
  toggle.className = 'roadmap-select-toggle' + (isSelected ? ' active' : '');
  toggle.title = 'エクスポート対象に含める';
  toggle.textContent = '✓';
  toggle.addEventListener('click', e => { e.stopPropagation(); toggleRoadmapSelection(roadmap.id); });

  const titleSpan = document.createElement('span');
  titleSpan.className = 'roadmap-block-title';
  titleSpan.contentEditable = 'true';
  titleSpan.spellcheck = false;
  titleSpan.textContent = roadmap.label;
  titleSpan.addEventListener('input', () => { roadmap.label = titleSpan.textContent; saveState(); });
  titleSpan.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); titleSpan.blur(); } });

  const idx = state.roadmaps.indexOf(roadmap);

  const upBtn = document.createElement('button');
  upBtn.className = 'roadmap-move-btn';
  upBtn.textContent = '↑';
  upBtn.title = '上に移動';
  upBtn.disabled = idx === 0;
  upBtn.addEventListener('click', e => { e.stopPropagation(); moveRoadmap(roadmap.id, -1); });

  const downBtn = document.createElement('button');
  downBtn.className = 'roadmap-move-btn';
  downBtn.textContent = '↓';
  downBtn.title = '下に移動';
  downBtn.disabled = idx === state.roadmaps.length - 1;
  downBtn.addEventListener('click', e => { e.stopPropagation(); moveRoadmap(roadmap.id, 1); });

  const delBtn = document.createElement('button');
  delBtn.className = 'roadmap-delete-btn';
  delBtn.textContent = '削除';
  delBtn.disabled = state.roadmaps.length <= 1;
  delBtn.addEventListener('click', e => { e.stopPropagation(); deleteRoadmap(roadmap.id); });

  const btnGroup = document.createElement('div');
  btnGroup.style.cssText = 'display:flex;gap:4px;flex-shrink:0;';
  btnGroup.appendChild(upBtn);
  btnGroup.appendChild(downBtn);
  btnGroup.appendChild(delBtn);

  header.appendChild(toggle);
  header.appendChild(titleSpan);
  header.appendChild(btnGroup);
  block.appendChild(header);

  // Grid
  const grid = document.createElement('div');
  grid.className = 'roadmap-grid';
  grid.style.gridTemplateColumns = `repeat(${state.roundCount}, var(--cell-w))`;
  grid.style.gridTemplateRows = `var(--header-h) minmax(var(--cell-h), auto)`;

  for (let col = 0; col < state.roundCount; col++) {
    const h = document.createElement('div');
    h.className = 'grid-col-header';
    h.textContent = `R${col + 1}`;
    grid.appendChild(h);
  }

  for (let col = 0; col < state.roundCount; col++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell';
    cell.dataset.col = col;
    cell.dataset.roadmapId = roadmap.id;

    cell.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = (dragSource && dragSource.type === 'cell') ? 'move' : 'copy';
      cell.classList.add('drag-over');
      const idx = getInsertionIndex(cell, e.clientY);
      const chips = [...cell.querySelectorAll('.cell-item:not(.dragging)')];
      chips.forEach((c, i) => c.classList.toggle('drop-before', i === idx));
    });
    cell.addEventListener('dragleave', e => {
      if (!cell.contains(e.relatedTarget)) {
        cell.classList.remove('drag-over');
        cell.querySelectorAll('.cell-item').forEach(c => c.classList.remove('drop-before'));
      }
    });
    cell.addEventListener('drop', e => {
      e.preventDefault();
      cell.classList.remove('drag-over');
      cell.querySelectorAll('.cell-item').forEach(c => c.classList.remove('drop-before'));
      const insertIdx = getInsertionIndex(cell, e.clientY);
      if (dragSource && dragSource.type === 'cell') {
        dragDropHandled = true;
        movePlacement(dragSource.instanceId, roadmap.id, col, insertIdx);
      } else if (dragSource && dragSource.type === 'palette') {
        addPlacement(dragSource.itemId, roadmap.id, col, insertIdx);
      }
    });

    roadmap.placements
      .filter(p => p.col === col)
      .forEach(pl => cell.appendChild(createItemChip(pl)));

    grid.appendChild(cell);
  }

  block.appendChild(grid);
  return block;
}

function createItemChip(placement) {
  const item = getItemById(placement.itemId);
  const chip = document.createElement('div');
  chip.className = 'cell-item';
  chip.dataset.instanceId = placement.instanceId;
  chip.title = item ? item.name : '不明なアイテム';

  const imgSrc = item ? getImage(item.id) : null;
  if (imgSrc) {
    const img = document.createElement('img');
    img.className = 'cell-item-img';
    img.src = imgSrc;
    img.alt = item.name;
    chip.appendChild(img);
  } else {
    const text = document.createElement('div');
    text.className = 'cell-item-text';
    text.textContent = item ? item.name : '?';
    chip.appendChild(text);
    if (item) {
      chip.appendChild(tryFolderImage(item.name, 'cell-item-img', img => {
        text.remove();
        img.style.display = '';
      }));
    }
  }

  const removeBtn = document.createElement('button');
  removeBtn.className = 'cell-item-remove';
  removeBtn.textContent = '×';
  removeBtn.title = '削除';
  removeBtn.addEventListener('click', e => {
    e.stopPropagation();
    removePlacement(placement.instanceId);
  });
  chip.appendChild(removeBtn);

  chip.draggable = true;
  chip.addEventListener('dragstart', e => {
    dragDropHandled = false;
    dragSource = { type: 'cell', instanceId: placement.instanceId };
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', placement.itemId);
    chip.classList.add('dragging');
    e.stopPropagation();
  });
  chip.addEventListener('dragend', () => {
    const handled = dragDropHandled;
    dragDropHandled = false;
    dragSource = null;
    chip.classList.remove('dragging');
    if (!handled) removePlacement(placement.instanceId);
  });
  return chip;
}

// ============================================================
// State mutations
// ============================================================

// カーソル Y 座標から、そのセル内での挿入位置（何番目の前に入れるか）を返す
function getInsertionIndex(cell, clientY) {
  const chips = [...cell.querySelectorAll('.cell-item:not(.dragging)')];
  for (let i = 0; i < chips.length; i++) {
    const rect = chips[i].getBoundingClientRect();
    if (clientY < rect.top + rect.height / 2) return i;
  }
  return chips.length;
}

// roadmap.placements 配列内で「col 列の posInCol 番目」に対応するスプライス位置を返す
function getColSpliceIndex(roadmap, col, posInCol) {
  let count = 0;
  for (let i = 0; i < roadmap.placements.length; i++) {
    if (roadmap.placements[i].col === col) {
      if (count === posInCol) return i;
      count++;
    }
  }
  return roadmap.placements.length;
}

function addPlacement(itemId, roadmapId, col, insertIdx) {
  if (!getItemById(itemId)) return;
  const roadmap = state.roadmaps.find(r => r.id === roadmapId);
  if (!roadmap) return;
  const placement = { instanceId: uid(), itemId, col };
  if (insertIdx != null) {
    roadmap.placements.splice(getColSpliceIndex(roadmap, col, insertIdx), 0, placement);
  } else {
    roadmap.placements.push(placement);
  }
  saveState();
  const cell = document.querySelector(`.grid-cell[data-roadmap-id="${roadmapId}"][data-col="${col}"]`);
  if (cell) {
    const chip = createItemChip(placement);
    const chips = [...cell.querySelectorAll('.cell-item')];
    insertIdx != null && insertIdx < chips.length
      ? cell.insertBefore(chip, chips[insertIdx])
      : cell.appendChild(chip);
  }
}

function movePlacement(instanceId, newRoadmapId, newCol, insertIdx) {
  let sourcePlacement = null;
  for (const roadmap of state.roadmaps) {
    const idx = roadmap.placements.findIndex(p => p.instanceId === instanceId);
    if (idx === -1) continue;
    [sourcePlacement] = roadmap.placements.splice(idx, 1);
    break;
  }
  if (!sourcePlacement) return;
  sourcePlacement.col = newCol;
  const target = state.roadmaps.find(r => r.id === newRoadmapId);
  if (!target) return;
  target.placements.splice(getColSpliceIndex(target, newCol, insertIdx ?? Infinity), 0, sourcePlacement);
  saveState();
  const chip = document.querySelector(`.cell-item[data-instance-id="${instanceId}"]`);
  const newCell = document.querySelector(`.grid-cell[data-roadmap-id="${newRoadmapId}"][data-col="${newCol}"]`);
  if (chip && newCell) {
    const chips = [...newCell.querySelectorAll('.cell-item:not(.dragging)')];
    insertIdx != null && insertIdx < chips.length
      ? newCell.insertBefore(chip, chips[insertIdx])
      : newCell.appendChild(chip);
  }
}

function removePlacement(instanceId) {
  for (const roadmap of state.roadmaps) {
    const idx = roadmap.placements.findIndex(p => p.instanceId === instanceId);
    if (idx !== -1) {
      roadmap.placements.splice(idx, 1);
      saveState();
      const chip = document.querySelector(`.cell-item[data-instance-id="${instanceId}"]`);
      if (chip) chip.remove();
      return;
    }
  }
}

function updateSelectAllBtn() {
  const btn = document.getElementById('btn-select-all');
  if (!btn) return;
  const allSelected = state.roadmaps.length > 0 &&
    state.roadmaps.every(r => state.selectedRoadmapIds.includes(r.id));
  btn.textContent = allSelected ? '全て解除' : '全て選択';
}

function toggleSelectAll() {
  const allSelected = state.roadmaps.every(r => state.selectedRoadmapIds.includes(r.id));
  state.selectedRoadmapIds = allSelected ? [] : state.roadmaps.map(r => r.id);
  saveState();
  renderGrid();
}

function toggleRoadmapSelection(id) {
  const idx = state.selectedRoadmapIds.indexOf(id);
  if (idx === -1) {
    state.selectedRoadmapIds.push(id);
  } else {
    state.selectedRoadmapIds.splice(idx, 1);
  }
  saveState();
  const isSelected = state.selectedRoadmapIds.includes(id);
  const block = document.querySelector(`.roadmap-block[data-roadmap-id="${id}"]`);
  if (block) {
    block.classList.toggle('selected', isSelected);
    const tog = block.querySelector('.roadmap-select-toggle');
    if (tog) tog.classList.toggle('active', isSelected);
  }
  updateSelectAllBtn();
}

function addRoadmap() {
  const roadmap = { id: 'r_' + uid(), label: `ロードマップ${state.roadmaps.length + 1}`, placements: [] };
  state.roadmaps.push(roadmap);
  state.selectedRoadmapIds.push(roadmap.id);
  saveState();
  renderGrid();
}

function moveRoadmap(id, direction) {
  const idx = state.roadmaps.findIndex(r => r.id === id);
  const newIdx = idx + direction;
  if (newIdx < 0 || newIdx >= state.roadmaps.length) return;
  const [rm] = state.roadmaps.splice(idx, 1);
  state.roadmaps.splice(newIdx, 0, rm);
  saveState();
  renderGrid();
}

function deleteRoadmap(id) {
  if (state.roadmaps.length <= 1) return;
  const idx = state.roadmaps.findIndex(r => r.id === id);
  if (idx === -1) return;
  state.roadmaps.splice(idx, 1);
  state.selectedRoadmapIds = state.selectedRoadmapIds.filter(sid => sid !== id);
  saveState();
  renderGrid();
}

// ============================================================
// Image upload
// ============================================================

// 画像ファイルを64×64 PNGのdataURLに変換して返す
function resizeImageFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = ev => {
      const img = new Image();
      img.onload = () => {
        const SIZE = 64;
        const canvas = document.createElement('canvas');
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext('2d');
        const scale = Math.min(SIZE / img.width, SIZE / img.height);
        const w = img.width * scale;
        const h = img.height * scale;
        ctx.drawImage(img, (SIZE - w) / 2, (SIZE - h) / 2, w, h);
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function triggerImageUpload(itemId) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = async e => {
    const file = e.target.files[0];
    if (!file) return;
    saveImage(itemId, await resizeImageFile(file));
    renderPalette();
    renderGrid();
  };
  input.click();
}

// ============================================================
// Custom item
// ============================================================
function addCustomItem(name) {
  const id = 'c_' + uid();
  state.customItems.push({ id, name });
  saveState();
  renderPalette();
}

// ============================================================
// Export – PNG
// ============================================================
// rrect / wrapText — canvas helpers
function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapText(ctx, text, cx, y, maxW, lh) {
  let line = '';
  const lines = [];
  for (const ch of text) {
    const t = line + ch;
    if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = ch; }
    else line = t;
  }
  if (line) lines.push(line);
  lines.slice(0, 3).forEach((l, i) => ctx.fillText(l, cx, y + i * lh));
}

async function exportPng() {
  const roadmaps = getSelectedRoadmaps();
  if (!roadmaps.length) { showToast('エクスポートするロードマップを選択してください'); return; }

  // 必要な画像を事前ロード
  const imgCache = new Map();
  const itemIds = [...new Set(roadmaps.flatMap(rm => rm.placements.map(pl => pl.itemId)))];
  await Promise.all(itemIds.map(itemId => {
    const item = getItemById(itemId);
    if (!item) return;
    const src = getImage(itemId) || folderImageUrl(item.name);
    const img = new Image();
    return new Promise(resolve => {
      img.onload = () => { imgCache.set(itemId, img); resolve(); };
      img.onerror = resolve;
      img.src = src;
    });
  }));

  // レイアウト定数（CSS変数に対応）
  const SCALE = 2;
  const N = state.roundCount;
  const CW = 72, CH_MIN = 88, HH = 36, CGAP = 2;
  const BPX = 12, BPTY = 10, BPBY = 12;
  const TH = 24, TM = 8;
  const BGAP = 12;
  const CPAD = 16;
  const CPPAD = 4, CGAP2 = 3, CHIP = 46;

  // セル内の1列あたりのチップ数からセル高さを計算
  function calcCellH(itemCount) {
    if (itemCount === 0) return CH_MIN;
    return Math.max(CH_MIN, 2 * CPPAD + itemCount * CHIP + (itemCount - 1) * CGAP2);
  }

  // ロードマップごとにセル高さとブロック高さを確定
  const layouts = roadmaps.map(rm => {
    const maxItems = Math.max(0, ...Array.from({ length: N }, (_, col) =>
      rm.placements.filter(p => p.col === col).length
    ));
    const cellH = calcCellH(maxItems);
    const blockH = BPTY + TH + TM + HH + CGAP + cellH + BPBY;
    return { rm, cellH, blockH };
  });

  const blockW = BPX * 2 + N * CW + (N - 1) * CGAP;
  const totalW = CPAD * 2 + blockW;
  const totalH = CPAD * 2 + layouts.reduce((s, l) => s + l.blockH, 0) +
    Math.max(0, layouts.length - 1) * BGAP;

  const canvas = document.createElement('canvas');
  canvas.width = totalW * SCALE;
  canvas.height = totalH * SCALE;
  const ctx = canvas.getContext('2d');
  ctx.scale(SCALE, SCALE);

  const C = {
    bg: '#f0f1f6', panel: '#ffffff',
    bgHeader: '#ecedf8', bgCell: '#f7f8fc',
    border: '#dde0ee', borderSel: '#4f46e5',
    accent: '#4f46e5', accentDim: 'rgba(79,70,229,0.1)',
    text: '#1e1a3a',
  };

  ctx.fillStyle = C.bg;
  ctx.fillRect(0, 0, totalW, totalH);

  let byOffset = CPAD;
  for (const { rm, cellH, blockH } of layouts) {
    const bx = CPAD;
    const by = byOffset;
    byOffset += blockH + BGAP;

    // ブロック背景・枠
    rrect(ctx, bx, by, blockW, blockH, 8);
    ctx.fillStyle = C.accentDim; ctx.fill();
    ctx.strokeStyle = C.borderSel; ctx.lineWidth = 2; ctx.stroke();

    // タイトル
    ctx.fillStyle = C.accent;
    ctx.font = 'bold 14px "Segoe UI","Noto Sans JP",sans-serif';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(rm.label, bx + BPX, by + BPTY + TH / 2);

    const gx = bx + BPX;
    const gy = by + BPTY + TH + TM;

    // 列ヘッダー
    for (let col = 0; col < N; col++) {
      const hx = gx + col * (CW + CGAP);
      rrect(ctx, hx, gy, CW, HH, 4);
      ctx.fillStyle = C.bgHeader; ctx.fill();
      ctx.strokeStyle = C.border; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = C.accent;
      ctx.font = 'bold 11px "Segoe UI",sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(`R${col + 1}`, hx + CW / 2, gy + HH / 2);
    }

    // セル
    const cy = gy + HH + CGAP;
    for (let col = 0; col < N; col++) {
      const cx = gx + col * (CW + CGAP);
      rrect(ctx, cx, cy, CW, cellH, 4);
      ctx.fillStyle = C.bgCell; ctx.fill();
      ctx.strokeStyle = C.border; ctx.lineWidth = 1; ctx.stroke();

      let ix = cx + CPPAD, iy = cy + CPPAD;
      for (const pl of rm.placements.filter(p => p.col === col)) {
        const item = getItemById(pl.itemId);
        if (!item) continue;
        const img = imgCache.get(pl.itemId);

        rrect(ctx, ix, iy, CHIP, CHIP, 4);
        ctx.fillStyle = C.panel; ctx.fill();
        ctx.strokeStyle = C.border; ctx.lineWidth = 1; ctx.stroke();

        if (img && img.naturalWidth > 0) {
          const IS = 44;
          const sc = Math.min(IS / img.naturalWidth, IS / img.naturalHeight);
          const iw = img.naturalWidth * sc, ih = img.naturalHeight * sc;
          ctx.drawImage(img, ix + (CHIP - iw) / 2, iy + (CHIP - ih) / 2, iw, ih);
        } else {
          ctx.fillStyle = C.text;
          ctx.font = '9px "Segoe UI","Noto Sans JP",sans-serif';
          ctx.textAlign = 'center'; ctx.textBaseline = 'top';
          wrapText(ctx, item.name, ix + CHIP / 2, iy + 4, CHIP - 6, 11);
        }

        ix += CHIP + CGAP2;
        if (ix + CHIP > cx + CW - CPPAD) { ix = cx + CPPAD; iy += CHIP + CGAP2; }
      }
    }
  }

  const fn = roadmaps.length === 1 ? `${roadmaps[0].label}_roadmap.png` : 'roadmap.png';
  const link = document.createElement('a');
  link.download = fn;
  link.href = canvas.toDataURL('image/png');
  link.click();
  showToast('PNG を保存しました');
}

// ============================================================
// Export / Import – JSON
// ============================================================
function exportJson() {
  const roadmaps = getSelectedRoadmaps();
  if (!roadmaps.length) { showToast('保存するロードマップを選択してください'); return; }
  const data = {
    version: 1,
    roadmaps: roadmaps.map(rm => ({
      label: rm.label,
      placements: rm.placements.map(pl => ({ itemId: pl.itemId, col: pl.col })),
    })),
    customItems: state.customItems.map(ci => ({ id: ci.id, name: ci.name })),
    roundCount: state.roundCount,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const link = document.createElement('a');
  link.download = `bpb_roadmap_${today}.json`;
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
  showToast('JSON を保存しました');
}

function importJson() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      let data;
      try { data = JSON.parse(ev.target.result); } catch { showToast('JSON の読み込みに失敗しました'); return; }

      const importedRoadmaps = Array.isArray(data.roadmaps) ? data.roadmaps : [];
      const importedCustomItems = Array.isArray(data.customItems) ? data.customItems : [];

      // ロードマップを末尾に追加（IDを新規発行して衝突回避）
      const newRoadmaps = importedRoadmaps.map(rm => ({
        id: 'r_' + uid(),
        label: rm.label || 'ロードマップ',
        placements: (rm.placements || []).map(pl => ({
          instanceId: uid(),
          itemId: pl.itemId,
          col: pl.col,
        })),
      }));
      state.roadmaps.push(...newRoadmaps);
      state.selectedRoadmapIds.push(...newRoadmaps.map(r => r.id));

      // カスタムアイテムを追加（ID重複はスキップ）
      const existingIds = new Set(state.customItems.map(ci => ci.id));
      for (const ci of importedCustomItems) {
        if (!existingIds.has(ci.id)) {
          state.customItems.push({ id: ci.id, name: ci.name });
          existingIds.add(ci.id);
        }
      }

      saveState();
      renderGrid();
      renderPalette();
      showToast(`${newRoadmaps.length} 件のロードマップを追加しました`);
    };
    reader.readAsText(file);
  };
  input.click();
}

// ============================================================
// Export – URL
// ============================================================
function copyShareUrl() {
  const encoded = encodeStateToUrl();
  const url = `${location.origin}${location.pathname}#s=${encoded}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url)
      .then(() => showToast('URLをクリップボードにコピーしました'))
      .catch(() => fallbackCopy(url));
  } else {
    fallbackCopy(url);
  }
}

function fallbackCopy(url) {
  const ta = document.createElement('textarea');
  ta.value = url;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  document.execCommand('copy');
  document.body.removeChild(ta);
  showToast('URLをクリップボードにコピーしました');
}

// ============================================================
// Toast
// ============================================================
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ============================================================
// Init
// ============================================================
function init() {
  // Load from URL hash if present, otherwise from localStorage
  const match = location.hash.match(/[#&]s=([^&]*)/);
  if (match) {
    decodeStateFromUrl(match[1]);
  } else {
    loadState();
  }
  // 初回起動時のデフォルト
  if (!state.roadmaps.length) {
    const rm = defaultRoadmap();
    state.roadmaps = [rm];
    state.selectedRoadmapIds = [rm.id];
  }
  // 不整合の修正（削除済みIDの除去・未設定の場合は全選択）
  state.selectedRoadmapIds = state.selectedRoadmapIds.filter(id => state.roadmaps.some(r => r.id === id));
  if (!state.selectedRoadmapIds.length) {
    state.selectedRoadmapIds = state.roadmaps.map(r => r.id);
  }

  // Sync round count input
  const roundInput = document.getElementById('round-count-input');
  roundInput.value = state.roundCount;
  roundInput.addEventListener('change', e => {
    const val = Math.max(1, Math.min(18, parseInt(e.target.value) || 18));
    roundInput.value = val;
    state.roundCount = val;
    saveState();
    renderGrid();
  });

  renderGrid();
  renderPalette();

  // Filter section collapse
  document.querySelectorAll('.filter-label[data-target]').forEach(label => {
    label.addEventListener('click', () => {
      const target = document.getElementById(label.dataset.target);
      label.classList.toggle('collapsed');
      target.classList.toggle('collapsed');
    });
  });

  // Search
  document.getElementById('palette-search').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderPalette();
  });

  // Rarity filter – 左クリックで個別トグル
  document.getElementById('rarity-filter').addEventListener('click', e => {
    const btn = e.target.closest('.rarity-btn');
    if (!btn) return;
    const r = btn.dataset.rarity;
    if (r === '') {
      rarityFilters.clear();
    } else {
      if (rarityFilters.has(r)) rarityFilters.delete(r);
      else rarityFilters.add(r);
    }
    updateRarityBtns();
    renderPalette();
  });

  // 右クリック: 「このレアリティのみ」⇔「このレアリティ以外全て」
  document.getElementById('rarity-filter').addEventListener('contextmenu', e => {
    e.preventDefault();
    const btn = e.target.closest('.rarity-btn');
    if (!btn || btn.dataset.rarity === '') return;
    const r = btn.dataset.rarity;
    const isOnlyThis = rarityFilters.size === 1 && rarityFilters.has(r);
    rarityFilters.clear();
    if (isOnlyThis) {
      ALL_RARITIES.forEach(ra => { if (ra !== r) rarityFilters.add(ra); });
    } else {
      rarityFilters.add(r);
    }
    updateRarityBtns();
    renderPalette();
  });

  // クラスフィルター – 左クリックで個別トグル
  document.getElementById('class-filter').addEventListener('click', e => {
    const btn = e.target.closest('.class-btn');
    if (!btn) return;
    const c = btn.dataset.class;
    if (c === '') {
      classFilters.clear();
    } else {
      if (classFilters.has(c)) classFilters.delete(c);
      else classFilters.add(c);
    }
    updateClassBtns();
    renderPalette();
  });

  // 右クリック: 「このクラスのみ」⇔「このクラス以外全て」
  document.getElementById('class-filter').addEventListener('contextmenu', e => {
    e.preventDefault();
    const btn = e.target.closest('.class-btn');
    if (!btn || btn.dataset.class === '') return;
    const c = btn.dataset.class;
    const isOnlyThis = classFilters.size === 1 && classFilters.has(c);
    classFilters.clear();
    if (isOnlyThis) {
      ALL_CLASSES.forEach(cl => { if (cl !== c) classFilters.add(cl); });
    } else {
      classFilters.add(c);
    }
    updateClassBtns();
    renderPalette();
  });

  // Custom item
  document.getElementById('btn-add-custom').addEventListener('click', () => {
    const name = prompt('カスタムアイテム名を入力してください:');
    if (name && name.trim()) addCustomItem(name.trim());
  });

  document.getElementById('btn-add-roadmap').addEventListener('click', addRoadmap);
  document.getElementById('btn-select-all').addEventListener('click', toggleSelectAll);

  // Export buttons
  document.getElementById('btn-export').addEventListener('click', exportPng);
  document.getElementById('btn-share').addEventListener('click', copyShareUrl);
  document.getElementById('btn-export-json').addEventListener('click', exportJson);
  document.getElementById('btn-import-json').addEventListener('click', importJson);

}

document.addEventListener('DOMContentLoaded', init);
