# Portfolio Website - Sharath Devadiga

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my software development work, skills, and provides a way for potential clients and collaborators to get in touch.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Proper meta tags, structured data, and optimal performance
- **Contact Form**: Working contact form with validation and API integration
- **Component Library**: Built with shadcn/ui components for consistency

## 🛠️ Tech Stack

### Frontend
- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                   # Next.js app directory
│   ├── api/              # API routes
│   ├── about/            # About page
│   ├── blog/             # Blog page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   ├── certifications/   # Certifications page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── data/                # Static data
│   ├── blog-posts.ts
│   ├── projects.ts
│   └── skills.ts
├── lib/                 # Utility functions
│   └── utils.ts
└── types/               # TypeScript type definitions
    └── index.ts
```

## 🎨 Customization

### Content
- Update personal information in the components
- Modify project data in `src/data/projects.ts`
- Update skills in `src/data/skills.ts`
- Add blog posts in `src/data/blog-posts.ts`

### Styling
- Customize colors in `tailwind.config.ts`
- Modify CSS variables in `src/app/globals.css`
- Update component styles using Tailwind classes

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

---

Made with ❤️ and Next.js by [Sharath Devadiga](https://github.com/Sharatdevadiga)
