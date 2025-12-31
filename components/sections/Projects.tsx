import ProjectCard from "./ProjectCard";

// components/sections/Projects.tsx
export const Projects = () => {
  const data = [
    {
      sector: "Healthcare",
      title: "Enterprise Patient Interface",
      impact: "35% Faster Load",
      tech: ["React.js", "AXIOS", "REST APIs", "Jest"],
      points: [
        "Optimized React-based UIs for high-concurrency enterprise environments.",
        "Ensured seamless data exchange through robust RESTful API integration.",
        "Implemented TDD to ensure 90%+ code coverage in sensitive medical modules."
      ]
    },
    {
      sector: "Banking",
      title: "Secure Financial Dashboard",
      impact: "50% Fewer Tickets",
      tech: ["TypeScript", "Redux Toolkit", "Styled-components"],
      points: [
        "Engineered robust solutions with strict Type-safety to prevent runtime errors.",
        "Reduced mobile-related support tickets by enforcing high responsive standards.",
        "Managed complex state for real-time transaction tracking using RTK."
      ]
    },
    {
      sector: "E-Commerce",
      title: "Scalable Shopping Platform",
      impact: "25% Higher Freq.",
      tech: ["React.js", "Redux", "CI/CD Pipeline", "Docker"],
      points: [
        "Architected interactive components focusing on user engagement and conversion.",
        "Increased deployment frequency by 25% through automated testing pipelines.",
        "Guaranteed 100% responsiveness across diverse device ecosystems."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto bg-slate-50/50 rounded-3xl my-10">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900">Core Case Studies</h2>
        <p className="text-slate-500 mt-2">Data-driven solutions across diverse industries.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project, index) => (
          <ProjectCard key={index+project.sector} {...project} />
        ))}
      </div>
    </section>
  );
};