# LoomCraft Textiles - Premium B2B E-Commerce Platform

A modern, high-end textile e-commerce platform built with Next.js 16, featuring glassmorphism design, Framer Motion animations, and a complete admin dashboard.

## 🎨 Features

- **Modern UI/UX**: Vercel/v0 inspired design with glassmorphism effects
- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experiences
- **Framer Motion Animations**: Smooth transitions and interactive elements
- **Admin Dashboard**: Complete CRUD operations for product management
- **Product Catalog**: Advanced filtering, sorting, and search functionality
- **Professional Pages**: Home, Catalog, Product Details, About, Contact, and Admin

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React useSyncExternalStore
- **Notifications**: Sonner

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/unknowncoder84/Textile.git

# Navigate to project directory
cd Textile

# Install dependencies
pnpm install

# Run development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎯 Pages

- **Home** (`/`) - Hero section with featured products
- **Catalog** (`/catalog`) - Product listing with filters
- **Product Detail** (`/catalog/[id]`) - Individual product page
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information
- **Admin** (`/admin`) - Product management dashboard

## 🎨 Design System

### Color Palette
- Primary: Zinc-900 (dark) / Zinc-100 (light)
- Background: Zinc-50 (light) / Zinc-950 (dark)
- Borders: Zinc-200 (light) / Zinc-800 (dark)

### Typography
- Font: Inter / Geist Sans
- Headings: Bold, tight tracking
- Body: Regular, relaxed leading

## 🔧 Configuration

### Environment Variables (Optional)
For Supabase integration, create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## 📱 Deployment

### Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Configure build settings:
   - **Build command**: `pnpm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 or higher

4. Deploy!

### Build Commands

```bash
# Build for production
pnpm run build

# Start production server
pnpm start

# Lint code
pnpm run lint
```

## 📚 Documentation

- [Design System](./DESIGN_SYSTEM.md) - Complete design documentation
- [Setup Guide](./SETUP_GUIDE.md) - Detailed setup instructions
- [Pages Overview](./PAGES_OVERVIEW.md) - Page features and testing

## 🎯 Key Features

### Glassmorphism Navbar
- Sticky positioning with backdrop-blur
- Integrated search bar
- Responsive mobile menu

### Product Cards
- Flipkart-style design
- Hover effects with zoom
- Category and stock badges
- Quantity indicators

### Admin Dashboard
- KPI stat cards with animated counters
- Product inventory table
- Add/Edit/Delete operations
- Floating action button

### Animations
- Framer Motion transitions
- Staggered reveals
- Smooth hover effects
- Loading states

## 🔄 Future Enhancements

- Supabase integration for persistent storage
- Image upload functionality
- User authentication
- Order management system
- Analytics dashboard
- Email notifications

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 👨‍💻 Author

Built with ❤️ by unknowncoder84

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

**Live Demo**: Coming soon on Netlify
