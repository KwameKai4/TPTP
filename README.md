# Taunton Pentest Protect

Astro brochure site for website security reviews and agreed fixes for independent businesses in Taunton, Somerset.

## Local preview

With Node.js 24 or newer installed, run:

```sh
npm ci
npm run dev
```

Use `npm run build` to produce the static site in `dist/`.

## Contact details

Edit `src/business.mjs` with the public email address, display phone number, international dialling number and working hours. The page only shows contact links once those details are configured. The project milestone email wording describes the client service. Set up email delivery through your project or email platform before promising automatic updates to clients.

## GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Open **Actions** and run **Publish Astro site** if the first push happened before Pages was enabled.
4. Check **Enforce HTTPS** in **Settings → Pages**, then open the deployment URL shown by GitHub and check the sample report download.

The workflow reads the Pages hostname and base path from GitHub, so the stylesheet, photograph and report links work on a repository subpath. The brochure lists the deposit and directs visitors to public phone and email links. Quotes, project booking and payments take place separately.

## Content

The homepage displays the fictional report in full. Visitors can also download the editable Word example from `public/sample-website-security-report.docx`. The homepage links to the original cyber news and survey sources. The Taunton Market House photograph is by Stephen McKay, licensed under [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/).

The site follows the browser's colour preference until the visitor chooses a mode. A manual choice is stored locally in their browser.

## Security and crawlers

Astro generates a Content Security Policy for the built page. It permits same-origin assets and the build's verified script hashes, and blocks browser network requests, embedded content and form submissions. Contact uses phone and email links. The production output is static and has no database, SQL queries, form handler or credentials. GitHub Actions uses the npm lockfile and pins each action to a commit.

`public/robots.txt` opts out of listed AI crawlers and includes a short fictional riddle in comments. Other crawlers may visit the site. The file is a voluntary policy for crawlers. On a GitHub Pages project URL such as `owner.github.io/repository/`, crawlers look for `owner.github.io/robots.txt`. To apply these rules there, merge the relevant user-agent groups into the host root policy and scope their `Disallow` to `/repository/`. A custom domain serving the site at its root can use the included file directly.

GitHub Pages serves the static files. A configurable web application firewall, rate limiting rules, or headers such as a CSP `frame-ancestors` directive require control of an edge proxy or a host that supports those features.
