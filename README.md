# Astra Parallax Link Hub

A responsive multi-page link hub for Astra Parallax.

## Start locally

```bash
npm install
npm run dev
```

## Add affiliate links

Open `src/linkData.js`, find the relevant platform, replace the `#` URL and set `active: true`.

Available public routes:

- `/instagram`
- `/youtube`
- `/blogspot`
- `/pinterest`

When deploying this single-page app, configure the host to rewrite unknown paths to `/index.html` so direct bio links work.
