# Product

<!-- impeccable:product-schema 1 -->

> Facts below are taken from `src/data.ts` and the live site copy. Items marked *(inferred)* were not confirmed by the owner yet.

## Platform

web

## Users

- Recruiters and hiring managers screening a senior React Native / full-stack developer, usually on a laptop between other tabs, deciding in under a minute whether to reach out. *(inferred from "Available for senior positions" and the ATS-oriented copy)*
- Small and mid-size business owners (UAE, Pakistan, Netherlands, US) looking for someone to build or rescue a mobile app, e-commerce store or admin panel. *(inferred from the Services, FAQ and WhatsApp contact)*

## Product Purpose

A personal portfolio for Abdul Haseeb, a Karachi-based full-stack and React Native developer. Success is a message: an email, a WhatsApp chat, a booked call, or a CV download.

## Positioning

One person who has shipped the whole stack for real small businesses: the React Native or Flutter app in the stores, the Laravel CMS behind it, and the admin panel the client uses every day. 25+ named client projects, many with live store links.

## Operating Context

Visitors arrive from LinkedIn, job boards, Google, and links sent on WhatsApp. Many check on a phone. The site is a single page with anchors, deployed on Vercel, with an Express server for the contact form (nodemailer) and Google Analytics.

## Capabilities and Constraints

- Single-page React 19 + Vite + Tailwind 4 + `motion` app. Content lives in `src/data.ts`; SEO JSON-LD is generated from it at build time (`seo-plugin.ts`).
- Contact form posts to the Express server; WhatsApp, phone, email, LinkedIn, GitHub links.
- Must keep: all sections' content, SEO metadata, contact form behaviour, CV download, WhatsApp button.

## Brand Commitments

- Name: Abdul Haseeb. Real portrait photo in `src/assets/images/abdulhaseeb.jpeg`.
- No logo or brand palette committed. *(inferred)*

## Evidence on Hand

- Real: work history (Devronix, Midware, Smart Soft Solution), 25+ projects with live web / App Store / Play Store links, education, portrait photo.
- Project cover images are Unsplash stock, not screenshots of the work, except First Souq and Grubsy (`public/images`).
- Testimonials use Unsplash stock avatars; whether the quotes are real is unconfirmed. Do not add new testimonials, metrics or clients.

## Product Principles

1. Show the shipped work and its links before any claim about skill.
2. Sound like a person: first person, plain sentences, specific clients and places.
3. Make contacting him one tap from anywhere on the page.
