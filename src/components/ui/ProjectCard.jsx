import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Badge from '../common/Badge';

const ProjectCard = ({ title, subtitle, category, gradient, tags, link, icon: Icon, delay, size }) => {
  return (
    <a 
      href={link}
      className={`relative group overflow-hidden bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between ${size}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${gradient} opacity-5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700`} />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg group-hover:shadow-xl transition-all`}>
            <Icon size={24} />
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white p-2 rounded-full">
            <ArrowUpRight size={16} />
          </div>
        </div>
        
        <div className="mb-2">
          <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-tight">{title}</h3>
        <p className="text-sm text-neutral-500 mb-6 line-clamp-3">{subtitle}</p>
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
        {tags.map((tag, i) => (
          <Badge key={i} className="bg-neutral-50 border-neutral-100 text-neutral-600 group-hover:bg-white group-hover:border-neutral-200 transition-colors">
            {tag}
          </Badge>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;