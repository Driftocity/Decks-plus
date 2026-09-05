# Decks Plus website

## Design direction
Modeled on the higher-end deck/outdoor-living builders (Archadeck,
Keystone Custom Decks, Custom Outdoor Living) rather than a generic
contractor template: large lifestyle photography, a muted natural
palette (deep forest green, warm ivory, brass accent — a nod to the
company's actual black/gold logo), a serif display font used
sparingly for big headlines, and generous whitespace. A trust strip
sits right under the homepage hero, and there's an honest
testimonials placeholder ready to hold real Google reviews once the
Business Profile is live — no fabricated reviews were added.


Static, no-build-step site for GitHub Pages, using clean URLs
(e.g. /decks/ instead of /decks.html). Every "page" is actually a
folder containing an index.html — GitHub Pages automatically serves
index.html when a folder is requested, so links look like:

  decksplus.com/
  decksplus.com/decks/
  decksplus.com/patios-fire-pits/
  decksplus.com/pergolas-gazebos/
  decksplus.com/fencing-outdoor-structures/
  decksplus.com/portfolio/
  decksplus.com/service-areas/
  decksplus.com/about/
  decksplus.com/contact/

All CSS/JS/image references use RELATIVE paths (not root-absolute
"/css/..."), so the site works correctly whether it ends up on:
  - a custom domain (decksplus.com)
  - a GitHub Pages user site (username.github.io)
  - a GitHub Pages PROJECT site in a subfolder (username.github.io/decksplus)
Don't change relative paths to root-absolute ones unless you're
certain the site will always live at a domain root.

## Before you go live

1. **Domain**: swap the placeholder `https://decksplus.example.com`
   for the real URL — it appears in every page's `<link rel="canonical">`,
   Open Graph tags, and in sitemap.xml/robots.txt. Easiest way:
   find-and-replace `decksplus.example.com` across all files.
2. **Photos**: every image is currently a placeholder block (the
   diagonal-striped boxes labeled "BEFORE PHOTO" / "AFTER PHOTO" /
   etc). Replace with real project photos:
   - Drop images into /images
   - Swap each `<div class="img-slot">...</div>` for
     `<img src="../images/your-photo.jpg" alt="...">` (note the
     `../` — every page except the homepage lives one folder deep)
   - For before/after sliders specifically, replace the two
     `.ba-img` divs inside `.ba-slider` with `<img class="ba-img before">`
     and `<img class="ba-img after">` tags — the slider JS
     (js/main.js) already handles the drag behavior, no changes
     needed there.
   - Write real, specific alt text (what it is + "Kokomo, IN" or the
     town) — this is real SEO value, don't skip it.
3. **Hero image**: the homepage hero uses a background image
   variable (`--hero-img` inline style) — point it at a real photo,
   ideally the night fire-pit shot or a finished multi-level deck.
4. **Google Business Profile / Search Console**: once those are set
   up, submit sitemap.xml in Search Console and make sure the NAP
   (Name, Address, Phone) on the Business Profile matches this site
   exactly — that consistency matters for local ranking.
5. **Testimonials**: no customer reviews were found publicly (no
   Google/Yelp listing yet). Once the Google Business Profile is
   live and collecting reviews, worth adding a testimonials section.

## Folder structure
```
index.html                          (home — /)
decks/index.html                    (/decks/)
patios-fire-pits/index.html         (/patios-fire-pits/)
pergolas-gazebos/index.html         (/pergolas-gazebos/)
fencing-outdoor-structures/index.html (/fencing-outdoor-structures/)
portfolio/index.html                (/portfolio/)
service-areas/index.html            (/service-areas/)
about/index.html                    (/about/)
contact/index.html                  (/contact/)
css/styles.css                      (shared by every page)
js/main.js                          (shared by every page)
images/                             (drop project photos here)
sitemap.xml
robots.txt
```
