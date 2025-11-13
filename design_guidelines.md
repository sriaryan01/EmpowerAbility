# EmpowerAbility Design Guidelines

## Design Approach
**Design System Foundation:** Material Design with government services adaptations for maximum accessibility and trust. This utility-focused application prioritizes clarity, efficiency, and assistive technology compatibility over visual flair.

## Typography System

**Font Family:** Inter from Google Fonts
- Primary: Inter (400, 500, 600, 700)
- Headings: Inter Semi-Bold (600) and Bold (700)
- Body: Inter Regular (400) and Medium (500)

**Type Scale:**
- H1: text-4xl md:text-5xl font-bold (Main page titles)
- H2: text-3xl md:text-4xl font-semibold (Section headers)
- H3: text-2xl md:text-3xl font-semibold (Card titles, scheme names)
- H4: text-xl font-semibold (Subsections, form groups)
- Body Large: text-lg (Important info, CTAs)
- Body: text-base (Standard content)
- Small: text-sm (Meta info, helper text)

## Layout System

**Spacing Units:** Tailwind units of 3, 4, 6, 8, 12, 16 (e.g., p-4, m-8, gap-6)
- Component padding: p-6 to p-8
- Section spacing: py-12 md:py-16
- Card spacing: p-6
- Form field spacing: gap-4 to gap-6
- Button padding: px-6 py-3

**Grid System:**
- Scheme cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Dashboard stats: grid-cols-2 lg:grid-cols-4 gap-4
- Application details: Two-column split (md:grid-cols-2 gap-8)

**Container Widths:**
- Max width: max-w-7xl mx-auto
- Content sections: px-4 md:px-6 lg:px-8
- Forms: max-w-2xl for focused tasks
- Tables: Full width with horizontal scroll on mobile

## Component Library

**Navigation (User Panel):**
- Horizontal top nav with logo left, main links center, user profile right
- Mobile: Hamburger menu with accessible drawer
- Active state indicator with underline
- Persistent "Apply for Scheme" CTA button

**Navigation (Admin Panel):**
- Sidebar navigation (fixed, collapsible on mobile)
- Width: w-64, collapse to w-16 icon-only mode
- Top bar with breadcrumbs and admin profile
- Section groupings: Dashboard, Schemes, Applications, Users

**Cards (Scheme Display):**
- Elevated with shadow-md hover:shadow-lg transition
- Structured: Icon/badge → Title → Short description → Eligibility tags → CTA
- Clear visual hierarchy with title prominence
- Status badges (top-right) for application tracking

**Forms:**
- Single-column layout (max-w-2xl)
- Label above input (font-medium, mb-2)
- Input height: h-12 with px-4
- Clear error states below inputs
- Multi-step forms with progress indicator
- File upload with drag-drop zone and preview

**Tables (Admin):**
- Striped rows for readability
- Fixed header on scroll
- Sortable columns with clear indicators
- Action buttons column (right-aligned)
- Mobile: Stacked card view

**Dashboard Stats Cards:**
- Large number display (text-3xl font-bold)
- Label below (text-sm)
- Icon left-aligned
- 4-column grid on desktop, 2-column on tablet, stacked on mobile

**Buttons:**
- Primary: Large (px-6 py-3), rounded-lg, font-medium
- Secondary: Outlined variant with same sizing
- Icon buttons: w-10 h-10, rounded-full for actions
- On images: Backdrop blur (backdrop-blur-sm bg-white/90)

**Accessibility Components:**
- Skip to main content link (visible on focus)
- Focus indicators: 2px solid ring with offset
- ARIA landmarks for all major sections
- Live regions for status updates
- Keyboard shortcuts panel (accessible via ?)

## Images

**Hero Section (User Landing):**
Large hero image depicting diverse PwDs in empowered scenarios (education, employment, independence). Image should be optimistic and professional. Height: min-h-[500px] with gradient overlay for text readability. Hero contains: Large headline, supporting text, and two CTAs (Browse Schemes, Register Now) with backdrop blur backgrounds.

**Scheme Cards:**
Small thumbnail images (w-24 h-24 rounded-lg) representing scheme categories (education icon, healthcare icon, employment icon, etc.). Use illustration style for consistency.

**Admin Dashboard:**
No hero image. Focus on data visualization with clean charts and tables.

**About/Info Pages:**
Supporting images showing accessibility features, government partnerships, or user testimonials with authentic photography.

## Page Layouts

**User Home:**
Hero → Quick search bar → Scheme categories (4-column grid with icons) → Featured schemes (3-column cards) → How it works (3 steps) → CTA section

**Browse Schemes:**
Sidebar filters (left, w-64) → Main content area with search bar → Scheme cards grid → Pagination

**Scheme Detail:**
Breadcrumbs → Scheme header with badge → Two-column: (Left) Details, eligibility, documents | (Right) Sticky apply card with quick info

**User Dashboard:**
Stats overview (4 cards) → Recent applications table → Quick actions section

**Admin Dashboard:**
Stats grid (4 metrics) → Charts row → Recent activity feed → Quick actions

**Admin Scheme Management:**
Table view with search/filter → Action buttons per row → Modal/slide-over for create/edit forms

## Accessibility Requirements

- Minimum touch target: 44x44px for all interactive elements
- Focus visible on ALL interactive elements
- Form labels explicitly associated with inputs
- Error messages announced to screen readers
- Heading hierarchy never skipped
- Alt text for all informational images
- Contrast ratio 4.5:1 minimum for text
- No content conveyed by color alone
- Keyboard navigation throughout (Tab, Shift+Tab, Enter, Escape)

## Animation Guidelines

Use animations sparingly and only for feedback:
- Card hover: Subtle shadow elevation (200ms ease)
- Button press: Scale down slightly (100ms)
- Loading states: Simple spinner, no complex animations
- Page transitions: None (instant for accessibility)
- Form validation: Error shake (subtle, 300ms)