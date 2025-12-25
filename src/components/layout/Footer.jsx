import React from 'react';
import { Terminal, Github, Linkedin, Activity } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
                <Terminal size={14} />
              </div>
              <span className="font-bold text-lg">DevOps.AI</span>
            </div>
            <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Alex Rivera. Crafted with code.</p>
        </div>

        <div className="flex gap-6">
            <a href="#" className="p-2 bg-neutral-50 rounded-full hover:bg-black hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="p-2 bg-neutral-50 rounded-full hover:bg-blue-600 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="p-2 bg-neutral-50 rounded-full hover:bg-pink-600 hover:text-white transition-colors"><Activity size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;