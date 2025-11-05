# Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Developer and AI Enthusiast.

## ✨ Features

- **Splash Screen** - Custom splash loading screen before the actual content.
- **Smooth Animations** - Custom scroll reveal animations and transitions
- **Dark/Light Mode** - Beautiful gradient backgrounds with persistent theme switching
- **Interactive Sections** - Experience carousel, project filtering, and dynamic content
- **Optimized Performance** - Built with Next.js 14 for fast loading and SEO
- **Responsive Design** - Works across desktop, tablet, and mobile devices
- **Modern UI** - Clean interface with Tailwind CSS and custom components

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/ChaitanyaMittal27/portfolio.git
cd portfolio
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout with theme setup
│   └── page.tsx             # Main page component
├── components/
│   ├── About.tsx            # About section
│   ├── Skills.tsx           # Skills section (categorized)
│   ├── Experience.tsx       # Experience carousel
│   ├── Projects.tsx         # Projects grid
│   ├── Hobbies.tsx          # Hobbies section
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer component
│   ├── Section.tsx          # Reusable section wrapper
│   └── ThemeToggle.tsx      # Dark/light mode toggle
├── data/
│   ├── experience.ts        # Experience data
│   ├── projects.ts          # Projects data
│   ├── skills.ts            # Skills data (categorized)
│   └── hobbies.ts           # Hobbies data
├── hooks/
│   ├── useCarousel.ts       # Carousel navigation hook
│   ├── useReveal.ts         # Scroll reveal animation hook
│   └── useTheme.ts          # Theme management hook
└── public/
    └── images/              # Project images and assets
```

## 🎨 Key Features Explained

### Splash Screen

- Splash screen loads on url loading with preset animations.
- Once splash screen has loaded, the rest of the content will become visible.

### Theme System

- Pre-hydration theme script prevents flash of wrong theme
- Persistent theme storage in localStorage
- Smooth gradient backgrounds with animated glows
- Custom color schemes for dark and light modes

### Animation System

- IntersectionObserver-based scroll reveals
- Staggered fade-in animations for lists
- Hover effects and transitions
- Custom carousel with smooth transitions

### Skills Section

- Organized by category (Languages, Frontend, Backend, etc.)
- Compact badge-style layout
- Single source of truth data structure

### Projects Section

- Responsive grid layout
- Tag-based filtering (coming soon)
- Hover effects with image zoom
- Modal for detailed project information

## 📝 Future Improvements

- [ ] **Mobile Responsiveness Fix** - Optimize layout and interactions for mobile devices
- [ ] Project tag filtering functionality
- [ ] Blog section integration
- [ ] Contact form with email service
- [ ] Add project search functionality
- [ ] Testimonials section
- [ ] Dark mode transition animations
- [ ] Add more interactive elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Chaitanya Mittal**

- Email: cma166@sfu.ca
- LinkedIn: [linkedin.com/in/chaitanya-mittal-47ab8a2a4](https://www.linkedin.com/in/chaitanya-mittal-47ab8a2a4/)
- GitHub: [github.com/ChaitanyaMittal27](https://github.com/ChaitanyaMittal27)

---

@Anonymouse - Built with ❤️ using Next.js and Tailwind CSS
