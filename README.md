# Nicole Roldan — Portfolio

Personal portfolio and project documentation site for Nicole Roldan, Full Stack Developer with a focus on AI Engineering. Live at **[nicoleroldan.com](https://nicoleroldan.com)**.

> This portfolio is continuously updated as new projects, features, and learnings are added.

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build tool | Vite 7 |
| Routing | React Router DOM 7 |
| Styling | CSS (custom properties, responsive) |
| Linting | ESLint 9 |
| Language | JavaScript (ESM) |

No UI library. No CSS framework. Custom layout, sidebar, and component system.

## Project Structure

```
src/
├── assets/
│   └── screenshots/          # Project screenshots
├── components/
│   ├── icons/                # Icon components
│   ├── ui/                   # Shared UI primitives (Badge, Button, SectionHeader, SocialButton)
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
├── data/                     # Static data layer
│   ├── contacts.js
│   ├── experiences.js
│   ├── navigation.js
│   ├── projects.js           # Project definitions + full documentation content
│   └── skills.js
├── hooks/
│   └── useActiveSection.js   # Scroll-based active section tracking
├── pages/
│   ├── Portfolio/
│   │   ├── sections/         # Hero, About, Skills, Projects, Experience, Contact
│   │   └── index.jsx
│   └── ProjectDetail/
│       ├── components/       # AdrCard, DocsSidebar
│       ├── sections/         # Overview, Features, Architecture, AI, Testing, Deploy
│       └── index.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Routes

| Path | Description |
|---|---|
| `/` | Portfolio — single-page with scrollable sections |
| `/project/:slug` | Project detail — tabbed documentation view |

## CVs

Downloadable CVs available in ES/EN from the site header. Generated with ReportLab and served as static PDF files from `public/`.

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Requires Node.js 18+.

## Deploy

The site is deployed on **Vercel** with zero configuration. Any push to `main` triggers a new deployment.

- Production: [nicoleroldan.com](https://nicoleroldan.com)
- Project docs included in the site (no external CMS — content lives in `src/data/projects.js`)