# Senior Frontend Portfolio | Ravi Shankar Singh

A high-performance, responsive portfolio built with **Next.js 15** and **Tailwind CSS**, designed to showcase 5.8+ years of experience in frontend engineering.

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Contact Integration:** [EmailJS](https://www.emailjs.com/)
- **Deployment:** [AWS Amplify](https://aws.amazon.com/amplify/)

## ✨ Key Features

- **Modern UI/UX:** Clean, professional aesthetic with a focus on readability and performance.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.
- **Type Safety:** Built with TypeScript to ensure robust code and easier maintenance.
- **Optimized SEO:** Configured with dynamic Metadata, Sitemaps, and OpenGraph images.
- **Direct Contact:** Integrated contact form and "Copy to Clipboard" email functionality.

## 🛠️ Project Structure

```text
├── app/              # Next.js App Router (Pages, Layouts, Metadata)
├── components/       # Reusable UI components (Navbar, Footer, Hero)
├── lib/              # Centralized constants and utility functions
├── public/           # Static assets (Favicons, OG-Images)


🚀 Technical Challenges & Solutions
1. Bridge between Server Components and Client Animations
Challenge: Next.js 15 uses Server Components by default for better SEO and performance. However, libraries like Framer Motion require a Client Component environment (using the 'use client' directive).

Solution: I implemented a Wrapper Pattern. By isolating animation logic into dedicated client-side components and wrapping the RootLayout or specific sections, I maintained the SEO benefits of Server-Side Rendering (SSR) while enabling high-performance animations.

2. Modernizing Configuration with Tailwind CSS v4
Challenge: Migrating to the latest Tailwind CSS v4 (alpha/beta) which moves away from the traditional tailwind.config.js JavaScript-based configuration.

Solution: I adopted the CSS-first approach by configuring the design system directly within globals.css using the @theme block. This reduces build-time JavaScript overhead and aligns with the modern web standard of using CSS variables for theme management.

3. Maintainability through Centralized Constants
Challenge: In a scaling portfolio, updating personal details (experience, titles, SEO meta) across multiple pages and components often leads to "Magic Strings" and inconsistency.

Solution: I architected a Single Source of Truth by centralizing all global variables in lib/constants.ts. This allows for global updates to personal branding and SEO metadata from a single file, significantly reducing the "surface area" for bugs during future updates.

4. Secure Contact Integration on the Frontend
Challenge: Implementing a functional contact form without a dedicated backend/database while keeping API credentials secure.

Solution: Integrated EmailJS for direct client-to-email communication. I secured the integration by utilizing Environment Variables (.env.local) for sensitive Service and Template IDs, ensuring they are never exposed in the public version of the code repository.



## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- Docker (optional, for containerized execution)

### Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev