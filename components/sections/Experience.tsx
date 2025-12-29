// components/sections/Experience.tsx
const experiences = [
  {
    company: "Apexon (formerly Infostretch)",
    role: "Frontend Developer II",
    period: "Aug 2021 – July 2023",
    desc: "Optimized React-based UIs for Healthcare & Banking sectors. Integrated RESTful APIs and maintained 90% test coverage."
  },
  {
    company: "Digition Solutions Pvt. Ltd.",
    role: "Web Developer",
    period: "Apr 2017 – July 2021",
    desc: "Engineered shopping and hotel management websites. Increased deployment frequency by 25% via automated pipelines."
  }
];

export const Experience = () => (
  <section id="experience" className="bg-slate-50 py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">Professional Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600" />
            <span className="text-sm text-blue-600 font-semibold">{exp.period}</span>
            <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
            <p className="italic text-slate-700 mb-2">{exp.role}</p>
            <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);