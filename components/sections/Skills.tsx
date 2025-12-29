// components/sections/Skills.tsx
import React from 'react';

const skillCategories = [
  {
    title: "Core Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    color: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    title: "Frameworks & Library",
    skills: ["React.js", "Next.js", "React Native", "Node.js"],
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    title: "State & Styling",
    skills: ["Redux Toolkit (RTK)", "Styled-components", "Bootstrap"],
    color: "bg-purple-50 text-purple-700 border-purple-200"
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS (EC2, S3, Lambda)", "Jenkins", "Git"],
    color: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    title: "Quality Assurance",
    skills: ["Jest", "Cypress", "SonarQube", "Agile Essentials"],
    color: "bg-rose-50 text-rose-700 border-rose-200"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-slate-900">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <div key={i} className={`p-6 rounded-2xl border ${cat.color} transition-hover hover:shadow-md`}>
            <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/50 rounded-md text-sm font-medium border border-current/10">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};