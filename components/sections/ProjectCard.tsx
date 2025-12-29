// components/sections/ProjectCard.tsx
import React from 'react';

interface ProjectProps {
  sector: string;
  title: string;
  impact: string;
  tech: string[];
  points: string[];
}

const ProjectCard = ({ sector, title, impact, tech, points }: ProjectProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">{sector}</span>
          <h3 className="text-2xl font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </div>
        <div className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-bold">
          {impact}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
            <span className="text-blue-500 font-bold">→</span>
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
        {tech.map((t) => (
          <span key={t} className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;