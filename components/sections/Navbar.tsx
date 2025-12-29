'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            // const isScrolled = window.scrollY > 20;
            // setScrolled(isScrolled);
            setScrolled(window.scrollY > 10);

            // 1. ADD 'contact' HERE
            const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
            const viewportMiddle = window.innerHeight / 2;

            let closestSection = activeSection;
            let minDistance = Infinity;

            sectionIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(viewportMiddle - sectionCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSection = id;
                    }
                }
            });

            setActiveSection(closestSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    if (!isMounted) return <div className="h-20" />;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
                : 'bg-transparent py-5 z-[100]'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="font-bold text-xl tracking-tighter text-slate-900">
                    Ravi<span className="text-blue-600">.DEV</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-semibold transition-all relative py-1 ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'
                                    }`}
                            >
                                {link.name}
                                {/* Active Indicator Line */}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full transition-all duration-500 ease-in-out" />
                                )}
                            </a>
                        );
                    })}
                    <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
                    <a
                        href="/resume.pdf"
                        className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all"
                    >
                        <Download size={14} /> Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg font-medium ${activeSection === link.href.substring(1) ? 'text-blue-600' : 'text-slate-600'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;