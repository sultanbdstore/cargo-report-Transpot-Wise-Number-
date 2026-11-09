# Transporter Cargo Report

Paste transporter messages and get a transporter-wise cargo chart image.

Works in the browser and installs on a phone like an app. Nothing is sent to any server. Entries stay in your own browser.

## Files (all in ONE folder, no sub-folders)
index.html, manifest.webmanifest, sw.js, logo-192.png, logo-512.png, logo-192-maskable.png, logo-512-maskable.png, apple-touch-icon.png

Upload all 9 files to the main (root) level of the repository. Do not put them inside another folder.

## Put it online with GitHub Pages
1. On github.com press **New repository**, name it (for example `transporter-cargo-report`) and create it.
2. Press **Add file > Upload files**, select all 9 files, then **Commit changes**.
3. Open **Settings > Pages**. Under **Build and deployment** choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After about a minute your link is `https://YOUR-USERNAME.github.io/transporter-cargo-report/`
5. Open it in Chrome on your phone, then use **Install app** on the page or Chrome menu > **Install app / Add to Home screen**.

## If the old icon still shows on the phone
Remove the old app from the home screen, open the link again in Chrome, and install again. Phones keep the first icon they saw.

## Updating later
Upload the changed files, then change the version in `sw.js` (for example `transporter-cargo-v3` to `transporter-cargo-v4`) so phones pick up the new version.
