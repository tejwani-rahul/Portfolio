import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectsSection from '../components/ProjectsSection';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsSection />
      <Contact />
    </>
  );
}
