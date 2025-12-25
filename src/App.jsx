import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';

const App = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-indigo-500 selection:text-white pb-20">
      
      <Navbar />

      <main className={`max-w-7xl mx-auto px-6 pt-32 transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        
        <Hero />
        
        <About />
        
        <Skills />
        
        <Projects />
        
        <Experience />

      </main>

      <Footer />
    </div>
  );
};

export default App;