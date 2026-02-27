# LoomCraft Textiles - Modern B2B E-Commerce Design System

## Overview
A high-end, modern B2B textile e-commerce platform with Vercel/v0 inspired aesthetics, featuring glassmorphism effects, smooth animations, and a professional admin dashboard.

## Design Philosophy

### Visual Identity
- **Color Palette**: Zinc-based neutral colors for a sophisticated, modern look
  - Light mode: Zinc-50 to Zinc-900
  - Dark mode: Full support with inverted zinc palette
- **Typography**: Inter/Geist Sans for modern tech aesthetic
- **Spacing**: Consistent 4px grid system
- **Borders**: Subtle zinc-200/zinc-800 borders with rounded corners

### Key Features Implemented

## 1. Glassmorphism Navbar
- **Sticky positioning** with backdrop-blur-md effect
- **Search bar** integrated in header (desktop)
- **Clean logo** with gradient background
- **Admin button** with user icon
- **Responsive** mobile menu with sheet component
- **Scroll-aware** shadow and background opacity

## 2. Hero Section
- **Modern gradient background** with grid pattern overlay
- **Bold heading**: "Premium Textile Solutions"
- **Dual CTAs**: Browse Collection + Get in Touch
- **Stats display**: 500+ Fabrics, 30+ Countries, 15+ Years
- **Fade-in animations** with staggered delays

## 3. Product Catalog

### Grid Layout
- **Responsive grid**: 1 column (mobile) → 3 columns (desktop)
- **Card design**: Subtle borders with hover lift effect
- **Image overlay**: Gradient overlay on hover
- **Quick actions**: View Details button appears on hover

### Product Card Features
- High-quality image with smooth zoom on hover
- Category badge (top-left)
- Stock status badge (top-right)
- Product name in bold
- Description preview (2 lines)
- Price per meter prominently displayed
- Material type badge
- Stock quantity indicator
- Hover effects: Shadow, translate-y, scale

### Filtering & Sorting
- **Sidebar filters**: Category, Status, Sort options
- **Framer Motion animations**: AnimatePresence for smooth transitions
- **Real-time filtering**: Instant results
- **Empty state**: Friendly message with icon

## 4. Admin Dashboard

### Stats Cards
- **4 KPI cards**: Total Products, In Stock, Low Stock, Out of Stock
- **Animated counters**: Smooth number animations
- **Color-coded icons**: Visual status indicators
- **Trend indicators**: Percentage changes
- **Hover effects**: Scale and shadow

### Product Table
- **Modern table design**: Clean borders, hover states
- **Product thumbnails**: 40x40px images in table
- **Responsive columns**: Hide on smaller screens
- **Search functionality**: Real-time product search
- **Action menu**: Dropdown with Edit/Delete options
- **Empty state**: Friendly no-results message

### CRUD Operations

#### Add Product
- **Floating Action Button**: Bottom-right corner with spring animation
- **Modal form**: Clean dialog with all product fields
- **Form fields**:
  - Product Name
  - Description (textarea)
  - Category (select)
  - Material (select)
  - Price per meter
  - Quantity
  - GSM (optional)
  - Width (optional)
  - Image URL (select from presets)
- **Validation**: Required fields enforced
- **Toast notifications**: Success/error feedback

#### Edit Product
- **Inline edit**: Click edit icon in table row
- **Pre-filled form**: All existing data loaded
- **Same modal**: Consistent UX with add form
- **Update confirmation**: Toast notification

#### Delete Product
- **Confirmation dialog**: Prevent accidental deletion
- **Warning message**: Clear consequences
- **Cancel option**: Easy to back out
- **Success feedback**: Toast notification

## 5. Animations & Interactions

### Framer Motion Integration
- **Page transitions**: Fade-in-up on scroll
- **Product grid**: AnimatePresence for filtering
- **Staggered animations**: Sequential element reveals
- **Spring physics**: Natural, bouncy animations
- **Layout animations**: Smooth reordering

### Hover States
- **Cards**: Lift effect (-translate-y-2) + shadow-2xl
- **Buttons**: Scale (1.05) + shadow increase
- **Images**: Zoom (scale-110) with smooth transition
- **Icons**: Rotate, scale, or translate effects

### Loading States
- **Skeleton loaders**: Shimmer effect for images
- **Animated counters**: Number count-up animations
- **Progress indicators**: Smooth transitions

## 6. Responsive Design

### Breakpoints
- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

### Mobile Optimizations
- Hamburger menu with slide-in sheet
- Stacked form fields
- Hidden table columns
- Touch-friendly button sizes
- Optimized image sizes

## 7. Accessibility

### ARIA Labels
- Proper button labels
- Screen reader text for icons
- Dialog titles and descriptions
- Form field associations

### Keyboard Navigation
- Tab order maintained
- Focus visible states
- Escape to close dialogs
- Enter to submit forms

### Color Contrast
- WCAG AA compliant text colors
- Sufficient contrast ratios
- Dark mode support

## 8. Performance Optimizations

### Image Handling
- Next.js Image component
- Lazy loading
- Responsive sizes
- Skeleton loaders during load

### Code Splitting
- Dynamic imports where appropriate
- Component-level code splitting
- Optimized bundle sizes

### State Management
- Client-side store with useSyncExternalStore
- Efficient re-renders
- Memoized calculations

## Component Architecture

```
app/
├── (main)/
│   ├── layout.tsx          # Main layout with navbar/footer
│   ├── page.tsx            # Home page with hero + featured
│   ├── catalog/
│   │   ├── page.tsx        # Product listing with filters
│   │   └── [id]/page.tsx   # Product detail page
│   ├── about/page.tsx
│   └── contact/page.tsx
├── admin/
│   ├── layout.tsx          # Admin layout
│   └── page.tsx            # Admin dashboard
├── layout.tsx              # Root layout with theme provider
└── globals.css             # Global styles + animations

components/
├── navbar.tsx              # Glassmorphism header
├── hero-section.tsx        # Hero with CTAs
├── product-card.tsx        # Product card component
├── admin-stock-table.tsx   # Admin table with CRUD
├── product-form.tsx        # Add/Edit form
├── catalog-filters.tsx     # Sidebar filters
├── animated-section.tsx    # Animation wrapper
└── ui/                     # Shadcn UI components
```

## Color System

### Light Mode
```css
--background: #fafafa (zinc-50)
--foreground: #09090b (zinc-950)
--card: #ffffff
--border: #e4e4e7 (zinc-200)
--primary: #18181b (zinc-900)
```

### Dark Mode
```css
--background: #09090b (zinc-950)
--foreground: #fafafa (zinc-50)
--card: #18181b (zinc-900)
--border: #27272a (zinc-800)
--primary: #fafafa (zinc-50)
```

## Typography Scale

- **Heading 1**: 4xl-7xl (36px-72px) - Hero titles
- **Heading 2**: 3xl-5xl (30px-48px) - Section titles
- **Heading 3**: 2xl-4xl (24px-36px) - Card titles
- **Body Large**: lg-xl (18px-20px) - Hero descriptions
- **Body**: base (16px) - Default text
- **Small**: sm (14px) - Labels, captions
- **Tiny**: xs (12px) - Badges, metadata

## Animation Timings

- **Fast**: 150ms - Hover states, button clicks
- **Normal**: 300ms - Card transitions, fades
- **Slow**: 500ms - Page transitions, complex animations
- **Spring**: Custom - Floating action button, modals

## Future Enhancements

### Database Integration (Supabase)
- Replace in-memory store with Supabase client
- Real-time subscriptions for live updates
- Image upload to Supabase Storage
- User authentication for admin panel
- Row-level security policies

### Additional Features
- Bulk operations (multi-select delete)
- Export to CSV/Excel
- Advanced filtering (price range, GSM range)
- Product variants (colors, sizes)
- Order management system
- Customer portal
- Analytics dashboard
- Email notifications

## Development Commands

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm start

# Lint code
pnpm run lint
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State**: React useSyncExternalStore
- **Notifications**: Sonner

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Built with modern web technologies for a premium B2B textile marketplace experience.**
