# CX Alloy Script

A Chrome extension that clicks the first `<button>` on the **active tab** when you press a keyboard shortcut.

## How it works

1. Focus the tab you want to act on.
2. Press the shortcut (default: **Alt+Shift+C** on Mac and Windows).
3. The extension injects a script into that tab only and clicks the first `button` element on the page.

## Project structure

```
├── manifest.json
├── icons/
├── src/
│   ├── background/background.js       # Listens for the shortcut
│   └── content/click-first-button.js  # Injected on demand
```

## Load in Chrome

1. Open `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked** and select this folder
4. Open `chrome://extensions/shortcuts` to view or change the keyboard shortcut

## Notes

- Works only on the currently active tab when you trigger the shortcut.
- Cannot run on restricted pages (e.g. `chrome://` URLs or the Chrome Web Store).
- Reload the extension after code changes.
