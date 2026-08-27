# Farm Management Course — Content Sync with Alison

**Given link:** https://alison.com/course/farm-management-and-maintenance (utm/gclid params stripped for
fetching — they're just ad tracking, not part of the course page)
**Alison course ID (confirmed live):** 6080
**Date:** 2026-08-27

## TL;DR

The content users actually see for this course — DB-driven module/lesson titles, and the public `/info/7`
checkout page — already matched Alison's live page almost word-for-word (this course was clearly built
directly from it originally). Added what was genuinely missing (a learning-outcomes list and a real unit
breakdown) to the live checkout page. Deliberately did **not** resurrect the separate `farm_course/index.html`
template — see "Investigation" below for why, and "Decision" for what was agreed instead.

## Investigation: why `farm_course/index.html` was left alone

Checked where Farm Management content actually lives, via `project/routes.py`:

| URL | Template | Live? |
|---|---|---|
| `/info/7` (public — linked from nav/homepage) | `course_data/farm_course/info.html` | ✅ live |
| `/course/7` (after login/purchase) | `course_data/course_layouts/course.html` (generic, DB-driven) | ✅ live |
| `/course/7/module/<n>/sub_module/<m>` | `course_data/farm_course/module_<n>/<m>.html` | ✅ live |
| `course_data/farm_course/index.html` | — | ❌ not referenced by any route |

Initially assumed `index.html` just needed a route added. On closer inspection it's more broken than that,
and so is the same file across **all 7 courses**, not just farm:

- It `{% extends 'course_data/course_layout.html' %}` — a path that doesn't exist (the real layout is at
  `course_data/course_layouts/course_layout.html`).
- Even pointed at the real layout, it defines `{% block data %}`, but that layout only defines
  `{% block wpb_wrapper %}` and `{% block content %}` — the block would never render.
- None of its CSS (`.l-card`, `.l-outcomes`, `.l-tabs`, `.l-mods`, star-rating markup, etc.) exists anywhere
  in `project/static`.

This whole `index.html` family looks like leftover output from an Alison-scraping tool that was never
actually integrated — resurrecting it means writing a full stylesheet from scratch, not a quick fix.

## Decision (confirmed with site owner)

Skip `index.html`. Instead, add the real Alison content directly onto the live, already-styled `/info/7`
checkout page, using the same pattern already proven on `palliative_course/info.html` (`fa-ul` bullet lists
for course points / units covered).

## What changed (live)

**`project/templates/course_data/farm_course/info.html`** — inside the existing Description tab, added:
- **"What You'll Learn"** — the 12 learning outcomes from the live Alison page, verbatim list of skills (not
  marketing copy).
- **"Units Covered"** — Unit 1 (Fundamentals of Farm Management, with Alison's module blurb) and Unit 2
  (Course assessment), matching the real module structure.

Verified by rendering `/info/7` on the dev server — 200 OK, no template errors, both new sections present in
the output.

## What was intentionally left out

Alison's live stats (**21,780 enrolled**, **578 positive ratings**) were **not** added to the live checkout
page. Those are Alison's own free-course platform numbers, not this site's — presenting them as this site's
social proof would misrepresent a different product's numbers as our own. (The learning outcomes and unit
list are fine to reuse since they're factual descriptions of the course content, not claims about this site's
own traffic.) Flagging this in case you want a rephrased/generic version of that framing instead (e.g. "CPD
accredited, industry-recognised curriculum") rather than Alison's literal counts.

## Also touched (no live effect)

**`project/templates/course_data/farm_course/index.html`** (still dead — not reachable by any route):
- Updated stats to Alison's current numbers, added the outcomes list and Module 1 description, changed the
  CTA from the login-gated `/course/{{course.ID}}` to `/info/{{course.ID}}` (checkout) and its label to
  "Enroll Now", and removed the "This Free Online Course Includes" wording (this is a paid course on this
  site, not Alison's free one). None of this is visible anywhere until/unless the file is actually wired up
  and re-styled — noting it here so it's not confused for a live change.

## Verified already accurate (no change needed)

- DB `Module`/`SubModule` titles for `course_id=7` — queried directly, all 7 match Alison's live topic URLs
  exactly (Learning Outcomes, Introduction to Farm Management, Crop and Livestock Management, Financial
  Planning and Sustainable Agriculture Practices, Farm Maintenance and Business Management, Lesson Summary,
  Course Assessment).
- `info.html`'s existing title/price/short description — already accurate, not contradicted by Alison's
  current page.
