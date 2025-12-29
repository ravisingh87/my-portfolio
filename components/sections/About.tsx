// components/sections/About.tsx
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="mt-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Element / Profile Image Placeholder */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white border border-slate-200 p-2 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
               {/* Replace with your professional headshot */}
               {/* <span className="text-lg italic text-slate-500 font-mono">[Professional Headshot]</span> */}
               <Image 
              src="/profile.jpg" // <--- Update this path to match your filename in /public
              alt="Ravi Shankar Singh - Professional Headshot"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority
            />
            </div>
          </div>
          
          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-4xl font-bold">5.8</p>
            <p className="text-xs uppercase tracking-widest opacity-80">Years Experience</p>
          </div>
        </div>

        {/* Narrative Text */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6 underline decoration-blue-500 decoration-4 underline-offset-8">
            The Engineer Behind the Code
          </h2>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              My journey in software development began 5.8 years ago with a simple goal: 
              <span className="text-slate-900 font-medium"> to bridge the gap between complex business logic and intuitive user experiences.</span>
            </p>
            
            <p>
              I’ve spent the majority of my career in the trenches of the **React ecosystem**, 
              navigating the evolution from Class components to Hooks, and now to the power of 
              **Next.js and TypeScript**. Whether it was optimizing data-heavy dashboards for 
              Banking or ensuring 100% uptime for Healthcare interfaces, I thrive on the 
              challenge of building systems that are both scalable and resilient.
            </p>

            <p>
              Beyond the browser, I am deeply invested in the **Cloud and DevOps** space. 
              Currently, I am pursuing my <span className="text-blue-600 font-semibold">AWS Solutions Architect Associate </span> 
              certification to better understand how frontend applications live and breathe 
              within modern cloud infrastructures.
            </p>

            <div className="pt-4 flex gap-4">
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold">Location</span>
                <span className="text-sm">Pune, MH</span>
              </div>
              <div className="w-[1px] h-10 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-bold">Philosophy</span>
                <span className="text-sm">Test-Driven Development</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;