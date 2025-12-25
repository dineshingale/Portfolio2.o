import React from 'react';
import { Layers, Zap, ArrowUpRight } from 'lucide-react';
import { experience } from '../../data/portfolio';

const Experience = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
                <Layers className="text-indigo-600" />
                <h3 className="text-xl font-bold">Professional Journey</h3>
            </div>
            
            <div className="space-y-10 relative">
                {/* Timeline Line */}
                <div className="absolute left-1.5 top-3 bottom-3 w-0.5 bg-neutral-100" />

                {experience.map((job, i) => (
                    <div key={i} className="flex gap-6 group relative">
                        <div className="flex-shrink-0 w-4 h-4 rounded-full bg-white border-4 border-indigo-500 mt-1.5 z-10 group-hover:scale-125 transition-transform" />
                        
                        <div>
                            <h4 className="font-bold text-lg text-neutral-900">{job.role}</h4>
                            <div className="flex flex-wrap gap-x-4 text-sm text-neutral-500 mb-2 font-medium">
                                <span className="text-indigo-600">{job.company}</span>
                                <span>•</span>
                                <span>{job.date}</span>
                            </div>
                            <p className="text-neutral-600 leading-relaxed max-w-2xl">{job.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Contact / CTA */}
        <div className="md:col-span-1 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600 rounded-full blur-[80px] opacity-20 pointer-events-none translate-x-10 translate-y-10" />
            
            <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Zap className="text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to optimize your workflow?</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  I'm currently accepting new projects. Whether you need a full CI/CD audit or an MLOps platform from scratch, let's connect.
                </p>
            </div>
            
            <a href="mailto:email@example.com" className="relative z-10 inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-6 py-4 rounded-xl font-bold hover:bg-neutral-100 transition-all hover:translate-y-[-2px]">
                Start a Project <ArrowUpRight size={18} />
            </a>
        </div>
    </div>
  );
};

export default Experience;