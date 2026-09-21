You are building a complete, production-ready, single-page bilingual (Amharic + English) birthday invitation website for a baby's 1st birthday party. It should feel like an elegant, emotionally warm, countdown-style digital invitation — the same spirit as a high-end wedding invite microsite (refined typography, soft scroll animations, a live countdown, a photo gallery with lightbox, an RSVP flow) — but re-themed for a joyful "little sunshine" first-birthday celebration instead of a wedding. Keep it elegant, not cartoonish or clip-art-y.

Generate the ENTIRE site in one response.

## DELIVERABLE

- One single, self-contained `index.html` file — inline `<style>` and `<script>`, Tailwind CSS via CDN (`https://cdn.tailwindcss.com`) plus small custom CSS for anything Tailwind can't do (animations, gradients, the countdown). No build step, no npm, no framework. It must work the instant it's opened or deployed to Cloudflare Pages / Netlify / Vercel / GitHub Pages.
- Fully responsive, mobile-first (most guests will open this on a phone from a WhatsApp/Telegram link).
- Smooth scroll, scroll-reveal fade/slide-up animations on each section as it enters the viewport (vanilla JS `IntersectionObserver`, no external animation library).
- A light/dark ("day/night") theme toggle in the nav, default light.
- Semantic HTML, alt text on all images, good Lighthouse/accessibility hygiene.
- Add `<title>`, favicon (use the 🎈 emoji as favicon via a data URI), and Open Graph meta tags so it previews nicely when shared in WhatsApp/Telegram.

## CONTENT — use this exact copy, do not paraphrase

**Baby's name:** Matania
**Occasion:** 1st Birthday
**Date:** Sunday, September 27, 2026
**Time:** 1:00 PM (displayed as "7:00 (Lunch)" per local convention — see note below)
**Venue:** Bole Bulbula 93 behind fresh corner, Addis Ababa, Ethiopia

**Amharic invitation text (use verbatim, in Amharic script, right after / alongside the English):**
```
የደስታችን ጥግ!
የአይናችን ማረፊያ ማታኒ 1ኛ ዓመት ልደቱን ሊያከብር ነው። በዚህ ልዩ ቀን ደስታችንን እንድትጋሩን በታላቅ አክብሮት እንጠይቃለን።
ቀን፦ የፊታችን እሁድ
ሰዓት፦ ከቀኑ 7 ሰዓት
ቦታ፦ ቦሌ ቡልቡላ
```

**English invitation text (use verbatim):**
```
Our Little Sunshine is Turning One!
Please join us to celebrate Matania's 1st birthday! Your presence would make the day extra special.
When: Sunday, September 27, 2026
Time: 7:00 (Lunch)
Where: Bole Bulbula 93 behind fresh corner
```

> Note for the agent: keep both language blocks — Amharic first, English underneath (or side-by-side on desktop, stacked on mobile). Do not translate one into the other yourself; both texts are already final as given above. Where the invitation prose says "this Sunday" idiomatically, that's fine to keep, but the hero/countdown must reference the concrete date (Sept 20, 2026) so the countdown timer works.

## SITE STRUCTURE (single scrolling page, in this order)

**1. Sticky nav bar**
- Left: circular monogram "M" logo.
- Center/right: nav links — Invitation, His First Year, The Day, Venue, Gallery, RSVP (smooth-scroll to each section's `id`).
- Far right: a light/dark theme toggle (sun/moon icon button).

**2. Hero section (full viewport height)**
- Soft background: a warm gradient (cream → soft gold → sky blue) with subtle decorative SVG shapes (a sun, a few clouds, a couple of floating balloons, light confetti dots) — all inline SVG, no external images needed here.
- Small eyebrow text: "Our Little Sunshine is Turning One!"
- Large elegant display of the name: **Matania**
- Subheading line: "Sunday, September 27, 2026 · Bole Bulbula 93 behind fresh corner, Addis Ababa"
- A live countdown timer to **2026-09-20T13:00:00+03:00** (Africa/Addis_Ababa, UTC+3), showing Days / Hours / Minutes / Seconds in four boxes, updating every second via `setInterval`.
- A subtle "scroll down" indicator/arrow at the bottom.
- One full-bleed placeholder photo slot for the baby's hero photo: `<img src="images/hero.jpg" alt="Matania">` inside a soft rounded/framed container (do NOT link to any real external photo — this is a placeholder the user will replace).

**3. Invitation section** (`id="invite"`)
- A centered elegant card containing the Amharic text block, then the English text block below it (see COPY above), on a soft cream card with a gold border/accent.
- Restate date / time / venue cleanly below the paragraph text as three small labeled items (icons: calendar, clock, map-pin — inline SVG icons, no icon library needed).

**4. "His First Year" section** (`id="story"`)
- A warm, generic placeholder narrative (2 short paragraphs) about a baby's first year — first smiles, first steps, first giggles, a year of love — written generically since no specific family story was provided. Clearly mark this text with an HTML comment `<!-- EDIT: personalize this paragraph with your own memories of Matania's first year -->` so the user knows to personalize or delete it.
- One placeholder photo slot beside/above the text: `<img src="images/first-year.jpg" alt="Matania's first year">`.

**5. A Blessing section** (`id="blessing"`, optional/easy to delete)
- A short, warm, non-denominational one-line blessing/wish for the child's first year (something like a wish for health, joy, and love — write your own gentle line, nothing borrowed from any copyrighted source). Wrap the whole section in an HTML comment marker `<!-- OPTIONAL SECTION: remove if not wanted, or replace with a scripture verse / family blessing -->`.

**6. The Day / schedule section** (`id="timeline"`)
- Heading: "The Celebration — Sunday, September 27, 2026"
- A simple vertical timeline with 4 placeholder stops guests can expect, clearly marked as editable placeholders (e.g. `<!-- EDIT: confirm actual schedule -->`):
  - 12:30 PM — Guests Arrive
  - 1:00 PM — Lunch
  - 2:30 PM — Cake Cutting & Songs
  - 3:30 PM — Celebration & Dancing

**7. Venue section** (`id="venue"`)
- Heading: "Where to Find Us"
- Venue name "Bole Bulbula 93 behind fresh corner, Addis Ababa" with a short line of directions text placeholder.
- An embedded Google Maps `<iframe>` with a placeholder `src` and an HTML comment `<!-- REPLACE: paste your real Google Maps embed link for Bole Bulbula 93 behind fresh corner venue here -->`.
- A "Get Directions" button linking to a placeholder Google Maps URL.

**8. Gallery section** (`id="gallery"`)
- Heading: "Our Gallery"
- A horizontally swipeable carousel (CSS scroll-snap, plus left/right arrow buttons) of 8 placeholder image tiles: `<img src="images/gallery-1.jpg" alt="Matania — photo 1">` through `gallery-8.jpg`. Style each tile as a soft rounded card with a pastel gradient fallback background (gold/blue/cream) and a small balloon or star SVG watermark, so it still looks intentional and on-theme even before real photos are added.
- Clicking a tile opens a full-screen lightbox modal (vanilla JS) showing the full image with a close button and left/right navigation.
- Small caption under the carousel: "More memories to come ✦"

**9. RSVP section** (`id="rsvp"`)
- Heading: "Will you join us?"
- An embedded `<iframe>` placeholder for a Google Form, with an HTML comment `<!-- REPLACE: paste your own Google Form embed link here for RSVP -->`.
- Below the iframe, a fallback simple contact line: "Or RSVP directly via WhatsApp/Telegram/phone" with a placeholder button `href="https://wa.me/251961310060"` (comment to replace with the real number).

**10. Share the Moments section** (`id="memories"`, optional)
- Short paragraph inviting guests to send their photos from the day.
- 3-step mini guide (Open the link → Send your photos → Done, thank you!) mirroring a simple numbered layout.
- A placeholder button `href="#"` labeled "Share Your Photos" with a comment to link to a Telegram bot / shared album link of the user's choice.

**11. Footer**
- "Matania" name, "Sunday, September 27, 2026 · Bole Bulbula 93 behind fresh corner, Addis Ababa"
- One warm closing line: "Made with love for Matania's first birthday 🎈"

## DESIGN SYSTEM

- **Palette:** cream/ivory background (`#FFF8F0`), soft gold accent (`#D9A25C` / `#E8B86D`), sky blue accent (`#A8D8EA`), warm white cards, charcoal text (`#3A3A3A`) — not pure black. Dark mode: deep navy/charcoal background with the same gold/blue accents.
- **Fonts (Google Fonts, loaded via `<link>`):** an elegant serif for headings (e.g. "Fraunces" or "Playfair Display") to keep the refined feel of the reference invite, paired with a clean sans-serif for body text (e.g. "Poppins" or "Inter"). If Amharic script rendering looks off in the serif font, fall back to the sans-serif font for Amharic text blocks specifically.
- **Motifs:** soft rounded corners, subtle drop shadows, gentle floating balloon/confetti/star/sun SVG decorations used sparingly (hero + section dividers), generous white space. Avoid childish clip-art — keep it tasteful and celebratory.
- **Animations:** gentle fade + slide-up on scroll per section, smooth hover states on buttons/cards, smooth countdown digit updates.

## TECHNICAL CHECKLIST (must all be true in the final output)

- [ ] Single HTML file, works with zero build step.
- [ ] Countdown timer correctly targets 2026-09-20T13:00:00+03:00 and counts down live.
- [ ] Fully responsive from ~360px mobile width up to desktop.
- [ ] All placeholder images use clearly named paths (`images/hero.jpg`, `images/gallery-1.jpg`, etc.) with graceful pastel-gradient fallback styling if the image fails to load, NOT broken image icons.
- [ ] Every placeholder that needs the user's own data (Google Form link, Google Maps embed, WhatsApp number, Telegram/album link, real photos) is marked with a clear `<!-- REPLACE: ... -->` or `<!-- EDIT: ... -->` HTML comment.
- [ ] No lorem ipsum anywhere except the clearly-marked optional/editable narrative sections.
- [ ] Smooth-scroll nav links all work and match section `id`s.
- [ ] Light/dark toggle actually switches a CSS class/data-attribute and persists via a JS variable for the session (no localStorage dependency required, but fine to include).
- [ ] Amharic text renders correctly (UTF-8 charset declared in `<meta charset="UTF-8">`).

Output the complete HTML file, ready to save as `index.html` and deploy immediately.
