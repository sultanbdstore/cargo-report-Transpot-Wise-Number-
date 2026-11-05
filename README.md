# Export Program Report Maker

Enter the day's program, get the summary image. Paste a WhatsApp message to fill the form automatically, check it against the totals in the message, then download the summary as a PNG or copy the WhatsApp text version.

Runs entirely in the browser. No server, no data leaves the device. Installable as an app (PWA).

## Publish on GitHub Pages

1. Create a new repository on GitHub and upload all files in this folder (keep the `icons` folder and the `.github` folder).
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The site goes live at `https://<your-username>.github.io/<repo-name>/`.

Or without Actions: **Settings → Pages → Deploy from a branch → main / (root)**.

## Files

- `index.html` – the whole app
- `manifest.webmanifest`, `sw.js` – install and offline support
- `icons/` – favicon and app logos
