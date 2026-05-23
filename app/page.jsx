'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/portfolio/LoadingScreen';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import GitHubStats from '@/components/portfolio/GitHubStats';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import BackToTop from '@/components/portfolio/BackToTop';

const CustomCursor = dynamic(() => import('@/components/portfolio/CustomCursor'), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/portfolio/ParticleBackground'), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      {/* Fixed particle canvas */}
      <ParticleBackground />

      {/* Grid overlay */}
      <div
        className="bg-grid"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.6,
        }}
      />

      {/* Ambient top glow */}
      <div style={{
        position: 'fixed', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '80%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0,220,255,0.2), transparent)',
        zIndex: 1, pointerEvents: 'none',
      }} />

      <Navbar />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />

        {/* Section divider */}
        <SectionDivider />

        <About />
        <SectionDivider />

        <Skills />
        <SectionDivider />

        <Experience />
        <SectionDivider />

        <Projects />
        <SectionDivider />

        {/* <GitHubStats /> */}
        <SectionDivider />

        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

function SectionDivider() {
  return (
    <div style={{
      maxWidth: '1100px', margin: '0 auto',
      padding: '0 1.5rem',
    }}>
      <div style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
      }} />
    </div>
  );
}
