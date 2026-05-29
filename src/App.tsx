import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Publications from './sections/Publications';
import Articles from './sections/Articles';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white transition-colors duration-300">
      <div className="fixed top-0 w-full h-screen -z-10 bg-black">
        <div className="absolute top-0 inset-x-0 h-[500px] w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-black to-black opacity-50" />
        <div className="absolute inset-0 grid-mask-bg" />
      </div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Publications />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;