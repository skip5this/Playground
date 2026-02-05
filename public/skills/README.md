# Skill Store Landing Pages

Landing pages for validating demand for AI agent skills before building them.

## Strategy

1. Create simple, compelling landing pages for skill ideas
2. Collect email signups for waitlist
3. Measure interest before investing dev time
4. Build the skills with proven demand first

## Skills in Development

| Skill | Price | Page | Status |
|-------|-------|------|--------|
| Changelog Composer | $9 | `/changelog-composer/` | 🚧 Landing page |
| Color Palette Generator | $7 | `/color-palette/` | 🚧 Landing page |
| Podcast Show Notes | $12 | `/podcast-notes/` | 🚧 Landing page |

## Tech Stack

- Pure HTML/CSS (zero dependencies)
- Deployed to Vercel/Netlify (free tier)
- Gumroad for payments (later: Stripe)
- Email capture → Notion or simple JSON

## Local Development

```bash
# Preview locally
cd projects/skill-store
python3 -m http.server 8080
# Open http://localhost:8080
```

## Deploy

```bash
# Vercel
vercel

# Or Netlify
netlify deploy --prod
```
