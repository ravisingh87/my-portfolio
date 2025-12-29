import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import Footer from '@/components/sections/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ProgressBar from '@/components/ui/ProgressBar';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ravi Shankar Singh",
  "jobTitle": "Senior Frontend Developer",
  "url": "https://your-portfolio-link.com",
  "sameAs": [
    "YOUR_LINKEDIN_URL",
    "YOUR_GITHUB_URL"
  ],
  "description": "Senior Frontend Developer with 5.8 years of experience specializing in React and Next.js."
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative">
        <ProgressBar />
        <Navbar />
        {/* We wrap each component in a div with the ID here */}
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Footer /></div>
        <ScrollToTop />
      </main>
    </>
  );
}