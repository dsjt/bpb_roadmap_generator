# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A BackpackBattles build roadmap visualizer. Users upload item images, arrange them in a round × build grid, and export as PNG. Defined in `仕様.md`.

## Architecture

**Static files** (`index.html` + `style.css` + `script.js`) — no build step, no server. Deployable directly to GitHub Pages.

External library: `html2canvas` loaded via CDN for PNG export.

Key design constraints:
- Everything runs in the browser; no backend calls
- PNG export via `html2canvas` or `Canvas API` (draw grid manually)
- Images are loaded as `FileReader` data URLs and held in memory — nothing persists across page reloads

### Core data model

```js
// Runtime state (persisted to localStorage as 'bpb_roadmap_v1')
state = {
  placements: [{ instanceId, itemId, col }],  // items placed on grid
  customItems: [{ id, name }],                // user-created items
}

// Item definition (predefined: PREDEFINED_ITEMS array in script.js)
{ id: 'i1', name: '石' }   // 518 predefined items

// Images stored separately: localStorage key 'bpb_img_{itemId}' → dataURL
// Canvas title stored separately: localStorage key 'bpb_title'
```

### Interaction model

- Drag source: palette items (HTML5 drag, `dataTransfer` carries `itemId`)
- Drop targets: grid cells (18 cells, `data-col` 0–17)
- Each cell renders placed items as chips: image (44×44) if uploaded, else text
- Click a chip to remove it (calls `removePlacement`)
- Camera button on palette item hover → file input → saves to localStorage

### URL sharing

State is encoded as `btoa(encodeURIComponent(JSON.stringify({p, c})))` and stored in the URL hash as `#s=<encoded>`. On load, hash takes priority over localStorage. Images are NOT included in the URL (browser-local only).

## Running locally

Open `index.html` directly in a browser, or serve with any static file server:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## MVP scope

Implement only what is in `仕様.md` under `## 機能`. Features listed under `## 優先度の低い機能（MVP後）` (text notes, row/col add-delete, undo/redo) are out of scope until MVP ships.
