# Ali Ashraf — Portfolio

Personal portfolio for **Ali Ashraf — AI / ML Engineer**. Built with plain
HTML, CSS, and JavaScript (no build step). Bilingual (Arabic / English) with
full RTL support, light/dark theme, and responsive design.

## Features

- **Bilingual** — toggle between Arabic (RTL) and English (LTR); choice is saved.
- **Dark / light theme** — respects OS preference on first visit, saved afterwards.
- **Responsive** — works from mobile to desktop.
- **Sections** — Hero, About, Skills, Projects, Contact.
- **No dependencies** — just open the files in a browser.

## File structure

```
Portfolio/
├── index.html    # markup + content
├── styles.css    # all styling (tokens, theme, RTL, responsive)
├── script.js     # i18n, theme toggle, nav, scroll reveal
└── README.md
```

## Run locally

Just open `index.html` in your browser. Or serve it for a closer-to-production feel:

```bash
# Python
python -m http.server 8000

# or Node
npx serve
```

Then visit `http://localhost:8000`.

## Customize

All content lives in **two places**:

1. **Static text in `index.html`** — the English copy is written directly in the
   HTML as the default.
2. **Translations in `script.js`** — the `I18N` object holds the strings for both
   `en` and `ar`. Edit the Arabic/English text there.

### Things you'll want to update

| What | Where |
| --- | --- |
| Name, title, description | `index.html` hero + `I18N` in `script.js` |
| Project links | `href="https://github.com/"` placeholders in `index.html` |
| Email | `href="mailto:you@example.com"` in the contact section |
| GitHub / LinkedIn | contact section links |
| Colors | CSS variables (`--accent`, `--accent-2`, `--accent-3`) in `styles.css` |

## Deploy

This is static, so any host works:

- **Vercel** — `vercel` in this folder (or import the repo).
- **Netlify** — drag-and-drop the folder, or connect the repo.
- **GitHub Pages** — push to a repo, enable Pages on the `main` branch.
