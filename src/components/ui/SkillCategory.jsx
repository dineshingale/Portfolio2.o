import React from 'react';

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow h-full">
    <div className="flex items-center gap-2 mb-4 text-neutral-800">
      <Icon size={20} className="text-indigo-600" />
      <h3 className="font-bold text-sm uppercase tracking-wider">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, i) => (
        <span key={i} className="px-3 py-1.5 bg-neutral-50 text-neutral-600 text-sm rounded-lg border border-neutral-100 hover:border-indigo-200 hover:text-indigo-600 transition-colors cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCategory;