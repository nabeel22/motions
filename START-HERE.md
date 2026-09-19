# Kiani motions — editable website

Latest website source, including the direct Calendly booking section.

## Run locally
Install Node.js 22.13 or later and pnpm 11.25.0. Open a terminal in this folder:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed in the terminal. Build using `pnpm build`.
This is a React/Vinext source project, not a standalone HTML file.

## Edit the website
- `app/page.tsx`: home page
- `app/site.tsx`: shared navigation, services, team, footer
- `app/globals.css`: colors, layout and animations
- `app/contact/page.tsx`: Calendly booking section
- `app/portfolio/page.tsx`: portfolio
- `app/designs-data.ts`: design gallery image links
- `app/shorts-data.ts`: video collections
- `public/assets/`: local images and branding

Booking destination: https://calendly.com/mskiani2277/kianimotions

The video players and design gallery reference Wistia-hosted media and require an internet connection. Those remotely hosted originals are not included in this ZIP. Local site images are included.

Dependencies, build output, credentials, database records and Git history are excluded. Existing database schema files are included for compatibility; contact forms and account pages have been removed. The code targets Cloudflare Workers through Vinext; another hosting platform may require adaptation.
