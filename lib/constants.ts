export const PERSONAL_INFO = {
  name: "Ravi Shankar Singh",
  title: "Senior Frontend Developer",
  experience: "5.8+ Years",
  email: "ravisingh19870903@gmail.com",
  location: "India",
  linkedIn: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
};

export const SEO_CONFIG = {
  description: `${PERSONAL_INFO.title} with ${PERSONAL_INFO.experience} experience specializing in Banking, Healthcare, and E-commerce.`,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://your-portfolio.vercel.app",
  googleVerification: "ABC_123_XYZ", // Paste your real code here
};

export const CONTACT_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
};

export const ANIMATION_THEMES = {
  primaryGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
};