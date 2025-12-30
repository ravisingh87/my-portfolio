// components/sections/Hero.tsx
import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="py-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="badge bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
        Frontend Developer II | React Ecosystem Expert
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6">
        Ravi Singh
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mb-10">
        5.8 years of experience driving digital transformation in Healthcare, Banking, and E-commerce. 
        Specializing in high-performance <span className="text-blue-600 font-medium">React, Next.js, and TypeScript.</span>
      </p>
      
      {/* KPI Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mt-10 border-t border-slate-100 pt-10">
        <div>
          <h3 className="text-3xl font-bold text-blue-600">35%</h3>
          <p className="text-sm text-slate-500 uppercase tracking-wide">Load Time Improvement</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">90%+</h3>
          <p className="text-sm text-slate-500 uppercase tracking-wide">Test Coverage</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">50%</h3>
          <p className="text-sm text-slate-500 uppercase tracking-wide">Reduction in Support Tickets</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-blue-600">40%</h3>
          <p className="text-sm text-slate-500 uppercase tracking-wide">Fewer Post-release Bugs</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;