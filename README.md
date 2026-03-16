# Willow Brook Dental Care

A realistic multi-page business website template for a fictional local dental clinic.

## Project Overview

Willow Brook Dental Care is a polished frontend portfolio project designed to feel like a real client-ready website for a suburban dental practice. The site presents a calm, trustworthy, and professional experience for patients looking for routine, cosmetic, restorative, and family dental care.

## Project Purpose

This project was created to demonstrate how a modern frontend stack can be used to build a realistic service-business website rather than a technical demo or dashboard-style app.

It is positioned as a reusable website template concept for local service businesses, especially healthcare and appointment-driven practices that need:

- clear service presentation
- strong trust signals
- approachable brand communication
- responsive page layouts
- a professional booking-oriented user flow

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui-style reusable components
- React Router
- Lucide React icons

## Features

- Multi-page website structure with dedicated routes for Home, About, Services, Gallery, and Contact
- Shared layout system with reusable container, section, and heading primitives
- Responsive header with active navigation states and mobile menu behavior
- Professional footer with contact details, hours, and quick links
- Calm, healthcare-appropriate visual system with soft shadows, restrained motion, and accessible focus states
- Homepage designed around trust, service clarity, and appointment conversion
- Patient-friendly About, Services, Gallery, and Contact pages
- Polished 404 page
- Basic SEO metadata and favicon support
- Static deployment-ready routing configuration for Vercel

## Project Structure

```text
business-website-template/
|-- public/
|   `-- favicon.svg
|-- screenshots/
|   `-- README.md
|-- src/
|   |-- app/
|   |   `-- router.tsx
|   |-- components/
|   |   |-- layout/
|   |   `-- ui/
|   |-- lib/
|   |   |-- site.ts
|   |   `-- utils.ts
|   |-- pages/
|   |   |-- HomePage.tsx
|   |   |-- AboutPage.tsx
|   |   |-- ServicesPage.tsx
|   |   |-- GalleryPage.tsx
|   |   |-- ContactPage.tsx
|   |   `-- NotFoundPage.tsx
|   |-- index.css
|   `-- main.tsx
|-- index.html
|-- vercel.json
`-- package.json
```

## Running the Project Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown by Vite in your browser.

4. Create a production build when needed:

```bash
npm run build
```

5. Preview the production build locally:

```bash
npm run preview
```

## Deployment Notes

This project uses `createBrowserRouter`, so static hosting needs a rewrite rule that sends unknown routes back to `index.html`. A `vercel.json` rewrite is included for Vercel deployment.

Current deployment readiness notes:

- production build succeeds with Vite
- routing is configured for static hosting
- there are no large raster placeholder images in the repo; the current page placeholders are layout-based blocks, which helps avoid unnecessary asset weight
- favicon and basic metadata are already included

## Portfolio Positioning

This project is a realistic multi-page business website template designed for local service businesses. It focuses on trust, clarity, responsiveness, and conversion-oriented UX rather than product dashboards, SaaS patterns, or developer-centric presentation.

## Screenshots

Add final screenshots to the `screenshots/` folder using these filenames:

- `home-page.png`
- `services-page.png`
- `gallery-page.png`
- `contact-page.png`

Recommended README image references once screenshots are added:

```md
![Home page](./screenshots/home-page.png)
![Services page](./screenshots/services-page.png)
![Gallery page](./screenshots/gallery-page.png)
![Contact page](./screenshots/contact-page.png)
```

## Notes

- Willow Brook Dental Care is a fictional clinic created for portfolio purposes.
- The contact form is frontend-only in this version and does not submit to a backend.
