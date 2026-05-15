import React from 'react';
import { User } from 'lucide-react';
import { siteConfig } from '../../data/portfolio';

const About = () => {
  return (
    <section id="about" className="mb-20">
      <div className="bg-neutral-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <User className="text-indigo-400" />
              <h2 className="text-3xl font-bold">{siteConfig.about.heading}</h2>
            </div>
            <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
              <p>
                {siteConfig.about.description.p1_part1} <span className="text-white font-semibold">{siteConfig.about.description.p1_highlight}</span> {siteConfig.about.description.p1_part2}
              </p>
              <p>
                {siteConfig.about.description.p2_part1} <span className="text-white font-semibold">{siteConfig.about.description.p2_highlight1}</span> {siteConfig.about.description.p2_part2} <span className="text-white font-semibold">{siteConfig.about.description.p2_highlight2}</span> {siteConfig.about.description.p2_part3}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 mt-8">
              {siteConfig.about.stats.map((stat, index) => (
                <div key={index}>
                    <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-neutral-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Terminal Graphic */}
          <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 font-mono text-sm shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 hidden md:block">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-2 text-neutral-400">
              <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> whoami</p>
              <p className="text-white">{siteConfig.about.terminal.role}</p>
              <p><span className="text-green-400">➜</span> <span className="text-blue-400">~</span> cat stack.json</p>
              <p className="text-yellow-300">
                {'{'} <br/>
                &nbsp;&nbsp;"core": "{siteConfig.about.terminal.stack.core}", <br/>
                &nbsp;&nbsp;"ai": "{siteConfig.about.terminal.stack.ai}", <br/>
                &nbsp;&nbsp;"ops": "{siteConfig.about.terminal.stack.ops}" <br/>
                {'}'}
              </p>
              <p className="animate-pulse">_</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;