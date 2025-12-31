import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="mt-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 inline-block relative">
        The Engineer Behind the Code<span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-600 rounded-full"></span>
      </h2>

      <div className="block">
        {/* The Image Wrapper - Floated Left */}
        <div className="float-left mr-8 mb-6 relative group w-full max-w-[280px] md:max-w-[320px]">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-white border border-slate-200 p-2 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-square bg-slate-100 rounded-xl relative overflow-hidden">
              <Image 
                src="/profile.jpeg"
                alt="Ravi Shankar Singh - Professional Headshot"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
          
          {/* Experience Badge */}
          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-xl hidden md:block z-10">
            <p className="text-3xl font-bold leading-none">5.8</p>
            <p className="text-[10px] uppercase tracking-widest opacity-90 font-semibold">Years Experience</p>
          </div>
        </div>

        {/* The Narrative Text - Now wraps around the floated div */}
        <div className="text-lg text-slate-600 leading-relaxed">
          <p className="mb-6">
            My journey in software development began 5.8 years ago with a simple goal:{' '}
            <span className="text-slate-900 font-semibold">
              to bridge the gap between complex business logic and intuitive user experiences.
            </span>
          </p>

          <p className="mb-6">
            I’ve spent the majority of my career in the trenches of the{' '}
            <span className="text-blue-600 font-bold italic underline decoration-blue-200 underline-offset-4">React ecosystem</span>, 
            navigating the evolution from Class components to Hooks, and now to the power of{' '}
            <span className="text-blue-600 font-bold">Next.js and TypeScript</span>. Whether it was optimizing data-heavy{' '}
            <span className="text-slate-800 font-medium border-b border-blue-400">dashboards</span> for Banking or ensuring 100% uptime for Healthcare interfaces, I thrive on the challenge of building systems that are both scalable and resilient.
          </p>

          <p className="mb-8">
            Beyond the browser, I am deeply invested in the{' '}
            <span className="bg-blue-50 px-1.5 py-0.5 rounded text-blue-700 font-semibold italic">Cloud and DevOps</span> space.{' '}
            Currently, I am pursuing my{' '}
            <span className="text-blue-600 font-semibold border-b-2 border-blue-100">
              AWS Solutions Architect Associate
            </span>{' '}
            certification to better understand how frontend applications live and breathe within modern cloud infrastructures.
          </p>

          {/* Quick Details - Use 'clear-both' to ensure this stays below everything */}
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
    </section>
  );
};

export default About;