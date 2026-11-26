# Arshid Tech Official Website (`arshid.tech`)

Bilingual (Persian default `/`, English `/en`) static corporate website and technical blog for **Arshid Smart Technology Development Co. (Ltd.)**, built with Astro 5, Tailwind CSS v4, and Pages CMS.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Blog Management (Pages CMS)

This repository includes `.pages.yml` configured for [Pages CMS](https://pagescms.org).
1. Sign in to Pages CMS with your GitHub account.
2. Select `Arshid-Tech/arshid-tech.github.io`.
3. Create or edit Persian (`src/content/blog/fa`) and English (`src/content/blog/en`) posts.
4. Saving commits directly to `main` and triggers automatic deployment via GitHub Actions.
