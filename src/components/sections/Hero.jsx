import React from 'react';
import { Github, Linkedin, FileText, Cpu } from 'lucide-react'; // Changed Container to Cpu for AI context
import IconButton from '../common/IconButton';
import ProfilePhoto from '../../assets/Profile-Photo.png';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center">
      {/* Text Content */}
      <div className="md:col-span-7 relative z-10 order-2 md:order-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-100">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          Available for Hire
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
          Architecting <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Intelligent</span> <br />
          Web Ecosystems.
        </h1>

        <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-10 max-w-xl">
          I'm <span className="text-black font-semibold">Dinesh Ingale</span>. I bridge the gap between <span className="text-black font-medium">Generative AI</span> models and production-ready <span className="text-black font-medium">MERN</span> applications using scalable DevOps principles.
        </p>

        <div className="flex flex-wrap gap-4">
          <IconButton Icon={Github} href="https://github.com/dineshingale" />
          <IconButton Icon={Linkedin} href="https://www.linkedin.com/in/dineshingale/" />

          <div className="h-12 w-[1px] bg-neutral-200 mx-2" />

          <button className="px-6 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-xl font-bold hover:bg-neutral-50 transition-all flex items-center gap-2 shadow-sm">
            <FileText size={18} />
            View Resume
          </button>
        </div>
      </div>

      {/* Profile Image & Graphics */}
      <div className="md:col-span-5 relative order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative w-full aspect-square max-w-[320px] md:max-w-full mx-auto md:mx-0">
          {/* Abstract Shapes behind */}
          <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-indigo-100 rounded-full blur-3xl opacity-50 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-pink-100 rounded-full blur-3xl opacity-50" />

          {/* Photo Container */}
          <div className="absolute inset-2 md:inset-4 bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src={ProfilePhoto}
              alt="Dinesh Ingale"
              className="w-full h-full object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 flex items-center gap-3">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Cpu size={20} />
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-semibold uppercase">Experience</div>
                <div className="text-sm font-bold">Google AI/ML Intern</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;