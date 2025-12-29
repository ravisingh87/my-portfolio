'use client';
import { useState } from 'react';
import ContactForm from '../ui/ContactForm';
import { Mail, Copy, Check } from 'lucide-react';
import { SiLinkerd, SiGithub } from '@icons-pack/react-simple-icons';

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "ravisingh19870903@gmail.com"; // Your email

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  const newLocal = <div className="mt-8 flex flex-col gap-2">
    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
      Social Profiles
    </span>
    <div className="flex gap-4">
      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/ravisingh87/" // Replace with your actual link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white px-5 py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-900/20"
      >
        <SiLinkerd size={18} />
        <span className="font-bold text-sm">LinkedIn</span>
      </a>

      {/* GitHub Button (Optional but recommended) */}
      <a
        href="https://github.com/ravisingh87" // Replace with your actual link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-slate-800 hover:bg-black text-white px-5 py-3 rounded-xl transition-all shadow-lg"
      >
        <SiGithub size={18} />
        <span className="font-bold text-sm">GitHub</span>
      </a>
    </div>
  </div>;
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* Left Side: Info & Copy Email */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">Let's Connect</h2>
          <p className="text-slate-400 mb-8 max-w-md">
            Currently looking for new opportunities as a Senior Frontend Developer.
            Feel free to reach out via the form or copy my email below.
          </p>

          {/* Copy Email Button */}
          <div className="inline-flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Direct Email
            </span>
            <div
              onClick={copyToClipboard}
              className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 p-3 rounded-xl cursor-pointer hover:bg-slate-800 transition-all group w-fit"
            >
              <Mail size={20} className="text-blue-400" />
              <span className="font-mono text-slate-200">{email}</span>
              <div className="ml-2 p-1 bg-slate-700 rounded-md group-hover:bg-blue-600 transition-colors">
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </div>
            </div>
            {copied && <span className="text-blue-400 text-xs animate-pulse">Copied to clipboard!</span>}
          </div>
        {newLocal}
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white rounded-2xl p-1"> {/* Wrapper to give a clean edge */}
          <ContactForm />
        </div>

      </div>
    </footer>
  );
};

export default Footer