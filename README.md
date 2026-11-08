# Transporter Cargo Report

Paste transporter messages and get a transporter-wise cargo chart image.

Works in the browser and can be installed on a phone like an app. Nothing is sent to any server. Your entries stay in your own browser.

## Files
- `index.html` the app
- `manifest.webmanifest` app name, colors and icons
- `sw.js` lets the app open without internet
- `icons/logo-192.png`, `icons/logo-512.png`, `icons/logo-512-maskable.png`

## Put it online with GitHub Pages
1. On github.com press **New repository**, give it a name (for example `transporter-cargo-report`) and create it.
2. Press **Add file > Upload files** and drag in **everything in this folder** (keep the `icons` folder). Press **Commit changes**.
3. Open the repository **Settings > Pages**. Under **Build and deployment** choose **Deploy from a branch**, pick branch `main` and folder `/ (root)`, then **Save**.
4. After about a minute the page shows your link: `https://YOUR-USERNAME.github.io/transporter-cargo-report/`
5. Open that link in Chrome on your phone. Use the **Install app** button on the page, or Chrome menu (three dots) > **Add to Home screen / Install app**.

## Updating later
Upload the changed files to the repository, then change the version in `sw.js` (for example `transporter-cargo-v1` to `transporter-cargo-v2`) so phones pick up the new version.
