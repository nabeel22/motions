# Kiani motions — ready-to-upload HTML website

This is the complete prebuilt static website: HTML pages, CSS, JavaScript and local images. There is no package.json, dependency installation, Node.js server, Vite configuration or build step. The browser JavaScript is already compiled and included to preserve the original interactive behavior.

## Upload to GitHub
1. Extract this ZIP.
2. Use a new empty repository, or remove the old framework project files before replacing them with these files.
3. Upload ALL extracted files and folders to the repository root. You should see index.html at the top level.
4. Include _next, assets, all page folders, the .txt page data files, and _redirects. They are required; do not rename them.
5. Commit to main. GitHub Desktop can upload the complete folder; the browser uploader may require multiple batches.

## Cloudflare Pages settings
Connect the repository under Workers & Pages > Create application > Pages > Import an existing Git repository.

- Framework preset: None
- Production branch: main
- Build command: exit 0
- Build output directory: /
- Root directory: leave blank
- Environment variables: none required

Remove the old pnpm build command and out directory settings if reusing your existing Pages project. Save and deploy. You do not need Workers, a database, npm or pnpm.

Cloudflare reference: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Included behavior
The same dark red design, responsive pages, team section, animated design rows, Wistia shorts and Meta ads, tap-to-toggle sound controls and Calendly buttons are retained. The HTML comes directly from the verified production export; this is not a visual recreation.

Wistia media and Calendly still require an internet connection and available public media. Keep your Wistia links active and allow your new domain if you have embed restrictions. Audible video requires a visitor interaction. Browser power-saving settings can limit autoplay.

## File layout
- index.html: home page
- about/index.html: about page
- services/index.html: services page
- portfolio/index.html: portfolio page
- contact/index.html: Calendly booking page
- assets/: local images
- _next/: precompiled CSS and browser JavaScript; required for design and interactions
- page .txt files: required prebuilt page data
- _redirects: old video and thank-you URL redirects for Cloudflare Pages
- 404.html: missing-page screen

This package is optimized for uploading as-is. It retains precompiled React/Next browser code to keep the existing behavior identical, but no framework development project or build tools are needed to host it. For substantial future content changes, keep the editable source ZIP too; editing HTML alone can disagree with the compiled page data.

Preview through a web server or your deployed Pages URL rather than double-clicking index.html, because assets use root-relative paths. Host at the domain root (Cloudflare Pages/custom domain), not a GitHub Pages repository subfolder.
