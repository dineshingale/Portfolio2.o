import React from 'react';
import { Terminal } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-xl border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center text-white shadow-lg shadow-black/20">
            <Terminal size={20} />
          </div>
          <span className="font-bold text-xl tracking-tight">Dev<span className="text-neutral-400">Ops</span>.AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#skills" className="hover:text-black transition-colors">Stack</a>
          <a href="#projects" className="hover:text-black transition-colors">Projects</a>
        </div>
        <div className="flex gap-4">
           <a href="mailto:hello@example.com" className="px-5 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-neutral-800 transition-all hover:scale-105 shadow-md">
             Let's Talk
           </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;