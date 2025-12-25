import React from 'react';
import SkillCategory from '../ui/SkillCategory';
import { skills } from '../../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          A curated stack of tools I use to build robust, scalable platforms.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => (
          <SkillCategory 
            key={index}
            title={skillGroup.title} 
            icon={skillGroup.icon}
            skills={skillGroup.items} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;