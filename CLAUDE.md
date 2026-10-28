# carriemarkusen.com: project notes

Carrie Markusen's second site, live at https://carriemarkusen.com. For now it's just a password screen.

## Home page

`index.html` is the .net site's boot screen on its own (styles under "Boot screen" in `styles.css`, script in `script.js`, `favicon.svg` copied from .net). It types "welcome to carrie's portfolio", then shows "> enter password:". The password is `:)` (cosmetic, readable in the page source). The right one prints "coming soon." where "access denied. try again." appears for a wrong one; the field clears either way and nothing else happens. Unlike .net, it shows on every visit (no `booting` class or sessionStorage) and has no boot log, command shortcuts or site behind it.

## Constraints

- Plain HTML and CSS. No framework, no build step.
- Hosted on GitHub Pages from the `main` branch, root folder. Repo: `waywocketsparklegem/carriemarkusen-com` (public). Local folder: `~/Documents/Claude/carriemarkusen-com`.
- `CNAME` holds `carriemarkusen.com`. `.nojekyll` is empty and turns off Jekyll. DNS is at Porkbun (four GitHub A records, `www` CNAME to `waywocketsparklegem.github.io`). HTTPS is enforced.
- Keep links relative (`styles.css`) so pages work when opened locally and on the live site.
- Sister site: carriemarkusen.net, in `~/Documents/Claude/carriemarkusen-net`. The top of each site's `styles.css` has a block marked "Shared with ..." (the `:root` tokens and base `*`/`html`/`body` rules) that must stay identical in both. Whenever that block changes in either site, ask Carrie whether to copy the change to the other site. Everything below the block is the site's own. The JetBrains Mono `<link>` in each page's `<head>` matches the .net site's too.

## Working with Carrie

- Carrie is a graphic and web designer. She knows basic HTML and CSS but is new to git and the terminal. Explain each command before running it.
- Plan first, show the plan, and wait for approval before writing files.
- Don't commit until Carrie has seen it working locally. Don't push unless asked.
- Don't give visual design advice (colors, contrast, sizing, type). Make the requested visual change and report what was done. Code and technical issues are fine to raise.
- No emojis anywhere, including commit messages.
