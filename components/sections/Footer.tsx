'use client';
import { useState } from 'react';
import ContactForm from '../ui/ContactForm';
import { Mail, Copy, Check } from 'lucide-react';
import { SiGithub } from '@icons-pack/react-simple-icons';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="text-white"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.039-1.852-3.039-1.853 0-2.136 1.444-2.136 2.938v5.67H9.342V9h3.412v1.561h.049c.475-.9 1.637-1.848 3.368-1.848 3.604 0 4.27 2.372 4.27 5.456v6.283zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.144 0 2.07.926 2.07 2.07 0 1.144-.926 2.07-2.07 2.07zM7.119 20.452H3.561V9h3.558v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
        <span className="font-bold text-sm">LinkedIn</span>
      </a>

      {/* GitHub Button (Optional but recommended) */}
      <a
        href="https://github.com/ravisingh87" // Replace with your actual link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-slate-800 hover:bg-black text-white px-5 py-3 rounded-xl transition-all shadow-lg"
        aria-label="Visit Ravi's GitHub profile (opens in a new tab)"
      >
        <SiGithub size={18} />
        <span className="font-bold text-sm">GitHub</span>
      </a>
    </div>
  </div>;
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
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
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              DIRECT EMAIL
            </span>
            <button
              onClick={copyToClipboard}
              aria-label={copied ? "Email copied to clipboard" : `Copy ${email} to clipboard`}
              className="flex items-center gap-3 bg-slate-800/50 border border-slate-700 p-3 rounded-xl cursor-pointer hover:bg-slate-800 transition-all group w-fit"
            >
              <Mail size={20} className="text-blue-400" />
              <span className="font-mono text-slate-200">{email}</span>
              <div className="ml-2 p-1 bg-slate-700 rounded-md group-hover:bg-blue-600 transition-colors">
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </div>
            </button>
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