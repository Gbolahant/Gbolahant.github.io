# Gbolahan Towobola — Portfolio Website

This is the code for my personal portfolio site.

**Live site:** https://gbolahant.github.io/
*(update this link if your repository has a different name, or once your custom domain is set up)*

---

## ✏️ The one rule: only edit `content.js`

All the words on the website live in **`content.js`**. To change anything —
your headline, your projects, your certifications — you only ever open that
one file and change the text inside the `"quotes"`. You never need to touch
the other files or know how to code.

### How to edit (all in your web browser)

1. Open **`content.js`** in this repository.
2. Click the **pencil icon** (top-right of the file).
3. Change the words you want.
4. Scroll down and click **Commit changes**.
5. Wait about a minute — the live site updates itself.

### The editing rules (follow these and nothing breaks)

- Only change text **inside the `"double quotes"`**.
- Keep every quote, colon `:` and comma `,` where it is.
- To make a word **bold**, wrap it in asterisks: `*like this*`.
- Do **not** type the `"` character inside your text. If you need a quotation
  mark, use the curly ones `“ ”` or an apostrophe `'`.

### If something looks broken

You probably deleted a quote or a comma. Don't worry — nothing is ever lost:
open `content.js`, click **History**, and restore an earlier version.

---

## 📁 What the files are

| File | What it does | Do I edit it? |
|------|--------------|---------------|
| `content.js` | All the text and projects for the site. | **Yes — this is the only one.** |
| `index.html` | The home page layout and design. | No |
| `project.html` | The template for each individual project page. | No |
| `images/` | A folder for your screenshots (you create this). | Add pictures here |

---

## ➕ Common things you'll want to do

### Change your headline, about text, contact email, etc.
Open `content.js` and edit the matching field near the top.

### Add or update a project
In `content.js`, find the `projects:` list. Each project is one `{ ... }` block.
Copy a whole block to add a new one, or delete a block to remove it. Each project
has a `slug` (its web address) and automatically gets its own page at:

```
project.html?p=YOUR-SLUG
```

Fill in that project's `summary`, `body` (the paragraphs), `gallery` (screenshots)
and `links` (buttons) to flesh out its page.

### Add screenshots
1. Click **Add file → Upload files** in this repository.
2. Upload your image into a folder named `images` (type `images/` before the
   filename when uploading if the folder doesn't exist yet).
3. In `content.js`, point to it, for example:
   ```
   img: "images/cv-dashboard.png"
   ```
   Leave `img: ""` to show a plain coloured tile instead.

### Finish the CV Dashboard, Sales Analysis and COVID-19 Dashboard pages
These three projects in `content.js` are wired up with real screenshots
already downloaded for Sales Analysis and COVID-19 Dashboard (in
`images/sales-analysis/` and `images/covid-19-dashboard/`) — CV Dashboard
still needs one (no screenshot existed on the old page; add one, or paste a
Power BI "Publish to web" link into that project's `embed` field). Every
`"TODO: ..."` line inside each project's `sections` is placeholder text —
open `content.js`, search for `TODO`, and replace each one with the real
write-up.

### Set up analytics (optional)
The site ships with a free, cookie-free visit counter from
[GoatCounter](https://goatcounter.com):
1. Create a free account at goatcounter.com and pick a site code.
2. In both `index.html` and `project.html`, find the line near the bottom
   that starts `<script data-goatcounter=...>` and replace `YOUR-CODE` with
   your site code.
3. Commit. Visits will start showing up in your GoatCounter dashboard.

### Adding a new project — one extra step
Besides adding a block to `content.js`'s `projects:` list, also add a line
to `sitemap.xml` (it isn't generated automatically):
```xml
<url><loc>https://gbolahant.github.io/project.html?p=YOUR-SLUG</loc></url>
```

### If you change your name, email or social links
Also update the `<script type="application/ld+json">` block near the top of
`index.html`'s `<head>` (search for `ld+json`) — it's static and isn't
synced from `content.js` automatically.

### Known limitation: sharing a project link
When someone shares a `project.html?p=...` link on LinkedIn, Twitter or
Slack, the preview card they see (image/title) will be the site's general
one, not that specific project's. The browser tab title updates correctly
once the page opens — this only affects the link-preview card itself,
because those platforms don't run JavaScript when generating previews, and
this site has no build step that could generate a real per-project page.

---

## 🚀 How this site is published (for reference)

This site is hosted free on **GitHub Pages**. It rebuilds automatically every
time a change is committed, so there's nothing to run or deploy by hand — just
edit `content.js`, commit, and wait a minute.
