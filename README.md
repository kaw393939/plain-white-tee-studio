# Plain White Tee Studio

A VitePress review site for the IS117 plain white T-shirt project: competitive evidence, audience hypotheses, brand territories, and a practical sequence of decisions. The ideas are proposals for review; this repository does not represent a chosen brand or a finished storefront.

Publication target: **[Plain White Tee Studio](https://kaw393939.github.io/plain-white-tee-studio/)**. [Deployment status](https://github.com/kaw393939/plain-white-tee-studio/actions/workflows/deploy.yml).

## Project boundaries

This is a separate repository from the parent AI Career Atlas checkout. Its own Git history and remote contain only the T-shirt research site.

The [IS117 Brand Studio](https://github.com/kaw393939/is117-brand-studio) is reference material. The local reference clone is held in the parent checkout's ignored `references/is117-brand-studio/` folder. This repository also ignores its own `/references/` folder for future local research material. Neither reference folder is published. Keep source links and concise original analysis in `docs/`; keep downloaded reference repositories and research working files in `references/`.

## Run locally

Use Node.js 24 LTS (see `.nvmrc`) and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by VitePress, including the `/plain-white-tee-studio/` base path.

```sh
npm run check    # Production build, then local page/asset/anchor checks
npm run preview  # Serve the production build
```

The link check validates built HTML links and asset references within the GitHub Pages base path. It does not request external sites or establish that a source's claims remain current.

## Review and update

- `docs/research/`: competitor observations, comparison, and linked sources.
- `docs/strategy/`: proposed directions and recommendation; preserve their hypothesis labels until an actual choice is made.
- `docs/project/`: source brief and next decisions.
- `docs/.vitepress/`: navigation, review components, and shared visual design.

When updating research, reopen the exact primary product page, record the review date and market/currency, and distinguish regular prices, sale prices, and multipacks. Attribute product promises to the brand. Do not turn a competitor's product claims into facts about the classroom shirt. Keep proposed audience needs separate from customer research and preserve unresolved decisions.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` installs the locked dependencies and runs `npm run check`. Pull requests build and validate without deploying. Pushes to `main` and manual runs on `main` also publish the checked output to GitHub Pages.

- Repository: [kaw393939/plain-white-tee-studio](https://github.com/kaw393939/plain-white-tee-studio).
- Pages publishing source: **GitHub Actions**.
- Build output: `docs/.vitepress/dist`.
- VitePress base path: `/plain-white-tee-studio/`.
- No custom secrets, server, or payment service is required.

If the repository is renamed, update the VitePress base, URLs, and `base` in `scripts/check-site.mjs` together. Follow the official [VitePress deployment guide](https://vitepress.dev/guide/deploy) and [GitHub Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) when changing the deployment.

Dependencies are pinned in `package-lock.json`. The project uses stable VitePress 1.6.4 and overrides its Vite dependency to 6.4.5; review this override alongside VitePress upgrades and rerun the production checks.
