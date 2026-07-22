## Our Alumni Section

Build a new alumni section that mirrors the Team section's aesthetic (parchment background, `font-display` headings, `font-body` body, sepia accent, rounded card, soft shadow, framer-motion hover lift).

### Files to create

1. `**src/components/Alumni.tsx**` — main section
  - Section wrapper: `id="alumni"`, `py-24 bg-background` (alternates with Team's parchment)
  - Centered heading "Our Alumni" (`font-display text-4xl md:text-5xl text-ink`) + subtitle
  - Toolbar row (left-aligned dropdown, right-aligned alumni count):
    - shadcn `Select` (width ~220px, rounded, border, `bg-card`, `font-body`)
    - Options: `2025-26`, `2024-25`, `2023-24`, `2022-23`, `2021-22` (default: `2025-26`)
    - Count text: `2024-25 (18 Alumni)` style
  - Persist selection in `sessionStorage` (`literary-alumni-batch`)
  - Grid: `grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto`
  - Wrap grid in `AnimatePresence` with `motion.div key={batch}` for 300ms fade cross-transition
  - Empty state: centered `BookX` lucide icon + "No alumni records available for this batch."
2. `**src/components/cards/AlumniCard.tsx**` — card component
  - Structure matches `TeamCard.tsx` (ScrollReveal + motion hover lift `y: -8, scale: 1.02`)
  - Image: `h-[260px] w-full object-cover object-top` with `rounded-t-lg`, hover zoom (`scale: 1.1`), `loading="lazy"`
  - Body (`p-6 text-center`):
    - Name — `font-display text-xl font-semibold text-ink`
    - Society Position — `font-body text-sepia font-medium` (small)
    - Divider spacing
    - Company — `font-body text-ink font-medium`
    - Designation — `font-body text-sm text-muted-foreground`
    - Social row (centered flex, gap-4): `Linkedin` and `Mail` lucide icons in sepia, `hover:scale-110` + `hover:text-warm-accent`
3. `**src/data/alumni.ts**` — data source
  - Export `alumni: Alumni[]` array with `{ id, name, batch, societyPosition, company, designation, image, linkedin, email }`
  - Export `BATCHES = ["2025-26","2024-25","2023-24","2022-23","2021-22"]`
  - Seed with 3–4 placeholder entries per batch using existing `/team/2022/*.jpeg` images as placeholders so cards render immediately
  - Fully data-driven: adding a batch only requires updating this file

### Files to modify

4. `**src/pages/Index.tsx**` — insert `<Alumni />` between `<Team />` and `<Events />`

### Design tokens reused (no new tokens)

- Colors: `bg-background`, `bg-card`, `text-ink`, `text-sepia`, `text-muted-foreground`, `border-border`
- Radius: card `rounded-lg`, image `rounded-t-lg`
- Shadow: `shadow-sm hover:shadow-md`
- Fonts: `font-display` (Playfair) / `font-body` (Nunito Sans)
- Motion: `ScrollReveal` for entrance, framer `AnimatePresence` for batch swap, spring hover matching TeamCard

### Technical notes

- shadcn `Select` is already available under `@/components/ui/select`
- Uses only existing dependencies (framer-motion, lucide-react, shadcn/ui)
- No backend, no routing changes, no design-system edits
- Fully responsive: 1 col mobile → 2 col md → 3 col lg
- Batch swap: `AnimatePresence mode="wait"` + `initial/animate/exit opacity` with 300ms duration  
 Replace the achievements section with this