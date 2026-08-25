import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import GitHubActivity from './components/GitHubActivity';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-200 selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <GitHubActivity />
        <Terminal />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
