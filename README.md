# Astra Parallax

Astra Parallax is a premium dark-theme publishing, discovery, and affiliate-ready marketing site built with Next.js 15, TypeScript, Tailwind CSS, shadcn-style components, Motion for React, local MDX, Fuse.js search, RSS, sitemap, robots, analytics placeholders, newsletter provider abstraction, Jest, Playwright, and GitHub Actions.

## Architecture

The app uses the Next.js App Router with Server Components by default. Local MDX lives in `content/posts` and `content/resources`. The public app consumes content only through `lib/content`, so the Contentlayer-style workflow is centralized and can be swapped for a generated provider later. SEO is handled with native Next metadata plus small JSON-LD helpers.

React 19 is used with Next.js 15. The content adapter intentionally avoids hard coupling to legacy Contentlayer packages to reduce peer-dependency friction while keeping `contentlayer.config.ts` as a schema-style source of truth.

## File Tree

```txt
app/
  [category]/page.tsx
  about/page.tsx
  api/newsletter/route.ts
  articles/[slug]/page.tsx
  globals.css
  layout.tsx
  not-found.tsx
  page.tsx
  resources/[slug]/page.tsx
  resources/page.tsx
  robots.ts
  rss.xml/route.ts
  search/page.tsx
  sitemap.ts
  store/page.tsx
components/
  analytics/
  cards/
  layout/
  mdx/
  media/
  newsletter/
  search/
  sections/
  seo/
  theme/
  ui/
content/
  posts/
  resources/
lib/
  analytics/
  content/
  newsletter/
  seo/
  site.ts
  utils.ts
public/
  icons/
  og/
  logo-mark.svg
  logo-wordmark.svg
__tests__/
e2e/
.github/workflows/
```

## Setup

Use Node.js 22 LTS or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
npm test
npm run e2e
npm run format
npm run format:check
```

## Content Authoring

Add posts to `content/posts/*.mdx`. Required frontmatter:

```yaml
title: "Post title"
date: "2026-02-05"
updated: "2026-02-12"
category: "productivity"
tags: ["systems"]
readingTime: "6 min read"
ogImage: "/og/example.svg"
excerpt: "Short summary."
coverImage: "/og/example.svg"
featured: true
draft: false
affiliateLinks: []
```

If `readingTime` is omitted, `lib/content` computes it from the MDX body.

Add resources to `content/resources/*.mdx` with `title`, `slug`, `date`, `category`, `tags`, `excerpt`, `coverImage`, `ogImage`, `affiliate`, `affiliateUrl`, `officialUrl`, `priceNote`, `featured`, and `draft`.

Supported MDX components include `Callout`, `YouTubeEmbed`, and `AffiliateDisclosure`.

## Analytics

Set `NEXT_PUBLIC_GA_ID` to enable Google Analytics. Set `GOOGLE_SITE_VERIFICATION` for Search Console verification metadata. Analytics code is isolated in `components/analytics` and `lib/analytics`.

## Newsletter

The newsletter API is `app/api/newsletter/route.ts`. It validates with Zod and uses `lib/newsletter/provider.ts`.

Google Sheets webhook:

```env
GOOGLE_SHEETS_WEBHOOK_URL=
GOOGLE_SHEETS_WEBHOOK_SECRET=
```

Brevo:

```env
BREVO_API_KEY=
BREVO_LIST_ID=
```

Mailchimp placeholders:

```env
MAILCHIMP_API_KEY=
MAILCHIMP_AUDIENCE_ID=
MAILCHIMP_SERVER_PREFIX=
```

If no provider variables are present, the route returns a mock success response for local development.

## SEO

The project includes root metadata, per-page metadata, canonical URLs, Open Graph, Twitter cards, sitemap, robots, RSS, and JSON-LD helpers for website, organization, articles, breadcrumbs, collections, item lists, and video objects.

## Deployment

Deploy to Vercel with either Vercel Git Integration or the included GitHub Actions workflow. If you use Vercel Git Integration, disable `.github/workflows/vercel-deploy.yml` to avoid duplicate deployments.

Required GitHub secrets for the workflow:

```txt
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

Set `NEXT_PUBLIC_SITE_URL` or `SITE_URL` to the production domain for absolute URLs in metadata, sitemap, and RSS.

## Custom Domain

Add the domain in Vercel, configure DNS as instructed by Vercel, set `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`, redeploy, then verify sitemap and Search Console.

## Branch Strategy

Use `main` for production. Use feature branches such as `feat/*`, `fix/*`, `content/*`, and `chore/*`.

Example commits:

```txt
feat(home): add premium hero and featured categories
feat(content): add MDX post schema and article routes
feat(seo): add sitemap, robots, RSS, and JSON-LD
feat(resources): add affiliate-ready resource cards and detail pages
chore(ci): add GitHub Actions and Vercel deployment workflows
docs(readme): add setup and deployment guide
```

## Roadmap

- Add real YouTube channel metadata and video schema per post.
- Add resource comparison tables.
- Add newsletter provider production mapping for Mailchimp.
- Add MDX image generation workflow for OG assets.
- Add content preview mode for drafts.
