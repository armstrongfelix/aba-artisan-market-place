# Aba Artisan Portfolio

A client-side React single-page application (SPA) that serves as a marketplace platform connecting customers with verified master artisans in **Aba, Nigeria**. Users can browse artisan profiles, view portfolios and reviews, book services, and manage projects through a dashboard.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Services & API](#services--api)
- [Authentication](#authentication)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Current Status & Known Gaps](#current-status--known-gaps)
- [Future Roadmap](#future-roadmap)

---

## Tech Stack

| Technology       | Version   | Purpose                      |
|------------------|-----------|------------------------------|
| **React**        | ^19.2.6   | UI framework                 |
| **React Router** | ^7.16.0   | Client-side routing          |
| **Tailwind CSS** | ^4.3.0    | Utility-first styling        |
| **Vite**         | ^8.0.12   | Build tool & dev server      |
| **ESLint**       | ^10.3.0   | Code linting                 |

### Dependencies

**Production:**
- `react` / `react-dom` — Core React library
- `react-router-dom` — Declarative routing for React
- `tailwindcss` — Utility-first CSS framework
- `@tailwindcss/vite` — Tailwind CSS Vite plugin

**Dev:**
- `vite` — Fast frontend build tool
- `@vitejs/plugin-react` — React fast-refresh for Vite
- `eslint` / `@eslint/js` — Linting
- `eslint-plugin-react-hooks` — React Hooks lint rules
- `eslint-plugin-react-refresh` — HMR-safe export lint rules
- `@types/react` / `@types/react-dom` — TypeScript type stubs (for editor intellisense)

---

## Project Structure

```
aba-artisan-market-place/
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite build configuration
├── eslint.config.js            # ESLint flat config
├── public/                     # Static assets served as-is
│   ├── favicon.svg
│   ├── icons.svg
│   └── locales/                # (empty) — for future i18n
│
└── src/                        # Application source code
    ├── main.jsx                # React entry point (BrowserRouter + AuthProvider)
    ├── App.jsx                 # Root layout (Navbar → Routes → Footer)
    │
    ├── assets/                 # Static images & icons
    │   ├── react.svg
    │   ├── vite.svg
    │   └── hero.png
    │
    ├── styles/
    │   └── index.css           # Tailwind CSS import
    │
    ├── theme/
    │   └── muiTheme.js         # (Unused) MUI theme palette definition
    │
    ├── context/
    │   └── AuthContext.jsx     # Auth state via React Context
    │
    ├── hooks/
    │   ├── useAuth.js          # Auth hook (consumer for AuthContext)
    │   └── useFetchArtisans.js # Data-fetching hook (returns { artisans, loading })
    │
    ├── services/
    │   ├── api.js              # Generic HTTP client (GET/POST)
    │   └── artisanService.js   # Artisan-specific API methods + fallback data
    │
    ├── routes/
    │   ├── AppRoutes.jsx       # Route definitions
    │   └── ProtectedRoute.jsx  # Auth guard (redirects to / if unauthenticated)
    │
    ├── components/
    │   ├── common/
    │   │   ├── SearchBar.jsx       # Reusable search input
    │   │   └── CustomButton.jsx    # Styled button component
    │   ├── feedback/
    │   │   ├── VerificationStatus.jsx  # Verified / Pending badge
    │   │   └── SkeletonCard.jsx        # Loading placeholder (pulse animation)
    │   └── layout/
    │       ├── Navbar.jsx            # Top navigation bar
    │       ├── Footer.jsx            # Footer
    │       └── ArtisanSidebar.jsx    # Dashboard sidebar menu
    │
    └── pages/
        ├── Home/
        │   ├── index.jsx         # Home page — hero + featured artisans
        │   └── HeroSection.jsx   # Gradient hero banner with CTA button
        │
        ├── Marketplace/
        │   ├── index.jsx         # Marketplace listing page
        │   ├── ArtisanCard.jsx   # Artisan profile card (image, name, specialty, badge)
        │   └── FilterPanel.jsx   # Specialty filter sidebar (checkboxes)
        │
        ├── ArtisanProfile/
        │   ├── index.jsx         # Artisan detail page
        │   ├── PortfolioGallery.jsx # Image grid (6 placeholders)
        │   └── ReviewSection.jsx # Customer reviews with star ratings
        │
        ├── BookingWizard/
        │   ├── index.jsx         # Booking page container
        │   └── BookingForm.jsx   # Date picker + description textarea
        │
        └── Dashboard/
            ├── index.jsx         # Dashboard container
            ├── Analytics.jsx     # Stat cards (views, bookings, projects)
            └── ProjectManagement.jsx # Client project table
```

---

## Features

### Core Features (Implemented)

| Feature                | Description                                                |
|------------------------|------------------------------------------------------------|
| **Marketplace Browse** | Grid of artisan cards with name, specialty, and verification badge |
| **Artisan Profile**    | Detailed view with bio, portfolio gallery, and reviews     |
| **Booking Flow**       | Date + description form to book an artisan                 |
| **Dashboard**          | Protected area with analytics stats and project management table |
| **Verification Badges**| Green "Verified" / yellow "Pending" status indicators      |
| **Responsive Layout**  | Tailwind CSS responsive grid and flex layouts             |
| **Loading States**     | Skeleton cards and animated placeholders while data loads  |
| **Protected Routes**   | Dashboard redirects unauthenticated users to home page     |

### Planned / Partially Implemented

| Feature                 | Status                     |
|-------------------------|----------------------------|
| Authentication (login)  | Context exists, no UI      |
| Search functionality    | SearchBar renders, not wired |
| Specialty filtering     | FilterPanel renders, not wired |
| API integration         | Service layer ready, no backend |
| Actual booking submission | Form renders, handler is TODO |

---

## Pages & Routes

| Path                  | Component            | Access     | Description                          |
|-----------------------|----------------------|------------|--------------------------------------|
| `/`                   | `HomePage`           | Public     | Hero banner + featured artisans      |
| `/marketplace`        | `MarketplacePage`    | Public     | Search, filter, browse artisan cards |
| `/artisan/:id`        | `ArtisanProfilePage` | Public     | Detail view for a single artisan     |
| `/book/:artisanId`    | `BookingWizardPage`  | Public     | Booking form for a specific artisan  |
| `/dashboard/*`        | `DashboardPage`      | Protected  | Analytics + project management       |

### Route Guard
- **`ProtectedRoute`** checks `isAuthenticated` from auth context; if `false`, redirects to `/`.

---

## Components

### Layout Components

| Component             | Location          | Description                                      |
|-----------------------|-------------------|--------------------------------------------------|
| `Navbar`              | `components/layout` | Top bar with logo + navigation links             |
| `Footer`              | `components/layout` | Footer with placeholder copyright                |
| `ArtisanSidebar`      | `components/layout` | Dashboard sidebar with nav links (Overview, Analytics, Projects) |

### Common Components

| Component             | Location          | Description                                      |
|-----------------------|-------------------|--------------------------------------------------|
| `SearchBar`           | `components/common` | Styled text input for search queries             |
| `CustomButton`        | `components/common` | Styled button with `bg-gradient-to-r`            |

### Feedback Components

| Component             | Location          | Description                                      |
|-----------------------|-------------------|--------------------------------------------------|
| `VerificationStatus`  | `components/feedback` | Green badge for verified, yellow for pending     |
| `SkeletonCard`        | `components/feedback` | Animated placeholder card (pulse animation)      |

### Page-specific Components

| Component             | Page              | Description                                      |
|-----------------------|-------------------|--------------------------------------------------|
| `HeroSection`         | Home              | Gradient banner with title and CTA button        |
| `ArtisanCard`         | Marketplace       | Card displaying artisan avatar, name, specialty, badge |
| `FilterPanel`         | Marketplace       | Sidebar with specialty checkboxes                |
| `PortfolioGallery`    | ArtisanProfile    | 2×3 grid of placeholder portfolio images         |
| `ReviewSection`       | ArtisanProfile    | List of customer reviews with star ratings       |
| `BookingForm`         | BookingWizard     | Date input + textarea + submit button            |
| `Analytics`           | Dashboard         | Three stat cards (views, bookings, projects)     |
| `ProjectManagement`   | Dashboard         | Table of client projects with status badges      |

---

## Services & API

### HTTP Client (`src/services/api.js`)

A lightweight `fetch()` wrapper with JSON headers. Reads the API base URL from the environment variable `VITE_API_BASE_URL`, falling back to `http://localhost:5000/api`.

```js
api.get(endpoint)          // GET  /api/{endpoint}
api.post(endpoint, data)   // POST /api/{endpoint}
```

### Artisan Service (`src/services/artisanService.js`)

Defines the expected API contract:

| Method | Endpoint                        | Purpose               | Fallback Data           |
|--------|---------------------------------|-----------------------|-------------------------|
| `GET`  | `/api/artisans`                 | Fetch all artisans    | 3 hardcoded artisans    |
| `GET`  | `/api/artisans/:id`             | Fetch single artisan  | First fallback artisan  |
| `POST` | `/api/artisans/:id/bookings`    | Submit a booking      | Mock success response   |

Currently, all service calls fall back to hardcoded/mock data since there is no backend.

### Anticipated Backend API

The frontend expects a RESTful backend to be running at the configured `VITE_API_BASE_URL`. The API contract is:

```
GET    /api/artisans              → Artisan[]
GET    /api/artisans/:id          → Artisan
POST   /api/artisans/:id/bookings → { success: true, message: string }
```

---

## Authentication

**Implementation:** `AuthContext.jsx` provides `user`, `login(userData)`, and `logout()` via React Context. The `useAuth` hook consumes this context.

**Current state:** The context initializes with `user = null`. There is **no login page or login UI**. The `ProtectedRoute` guarding `/dashboard/*` redirects to `/` when not authenticated.

To test the dashboard, you would need to call `login()` programmatically (e.g., from the browser console or by adding a login button).

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (required by Vite 8)
- **npm** 9+ (or pnpm / yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/aba-artisan-market-place.git
cd aba-artisan-market-place

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

This starts the Vite dev server (default: `http://localhost:5173`). Open it in your browser to see the app with hot module replacement.

### Build for Production

```bash
npm run build
```

Produces a production-ready build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

### Lint

```bash
npm run lint
```

Runs ESLint on the entire project using the flat config in `eslint.config.js`.

---

## Environment Variables

Create a `.env` file in the project root (not currently committed):

| Variable              | Default                       | Description                  |
|-----------------------|-------------------------------|------------------------------|
| `VITE_API_BASE_URL`   | `http://localhost:5000/api`   | Base URL for the REST API    |

Vite exposes only variables prefixed with `VITE_` to the client code.

---

## Current Status & Known Gaps

### What Works
- All page components render with mock/hardcoded data
- Client-side routing works end-to-end
- Protected route guard redirects unauthenticated users
- Tailwind CSS styling is applied throughout
- Build and dev server run without errors
- Loading states show skeleton placeholders

### What's Missing / TODO

| Area                  | Details                                                        |
|-----------------------|----------------------------------------------------------------|
| **Backend**           | No backend server exists. All data is hardcoded on the client. |
| **API Integration**   | `artisanService.js` uses fallback data; real API calls will work when a backend is running. |
| **Authentication UI** | No login/signup page. Auth context exists but has no UI to trigger `login()`. |
| **Search**            | `SearchBar` component renders but does not filter results.     |
| **Filtering**         | `FilterPanel` checkboxes render but do not filter the marketplace. |
| **Booking Submission**| `BookingForm` submit handler is a `console.log` TODO stub.     |
| **Portfolio Images**  | `PortfolioGallery` uses colored placeholder divs (no real images). |
| **MUI Theme**         | `src/theme/muiTheme.js` is defined but unused (MUI not installed). |

---

## Future Roadmap

1. **Backend Implementation** — Build a RESTful API (Node.js/Express, Python/FastAPI, etc.) implementing the endpoints defined in `artisanService.js`.
2. **Database Integration** — Add a database (PostgreSQL, MongoDB, SQLite) to persist artisans, users, bookings, and reviews.
3. **Authentication Flow** — Create login/register pages, wire up `AuthContext` with JWT or session-based auth.
4. **Search & Filter** — Connect `SearchBar` and `FilterPanel` to actual data filtering (client-side or server-side).
5. **Booking Workflow** — Implement booking submission, confirmation, and management.
6. **Image Upload** — Allow artisans to upload portfolio images.
7. **Real Analytics** — Replace hardcoded dashboard stats with real data from the backend.
8. **Internationalization** — Add i18n support (locale files exist in `public/locales/`).
9. **Testing** — Add unit tests (Vitest) and integration tests.

---

## Build Configuration

### Vite (`vite.config.js`)

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

### ESLint (`eslint.config.js`)

Flat config with recommended rules for JavaScript/JSX, React Hooks, and React Refresh. `dist/` directory is globally ignored.

---

## License

This project is for educational/portfolio purposes.
