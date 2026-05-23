'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import img from '../../public/images/rohanpic.jpeg'
import Image from 'next/image';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '0.75rem 2rem' : '1.25rem 2rem',
          background: scrolled ? 'rgba(5, 5, 8, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'all 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            border: '1px solid rgba(0,220,255,0.25)',
            background: 'linear-gradient(135deg, rgba(0,220,255,0.12), rgba(59,130,246,0.08))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          <Image
            src={img}
            alt="Rohan Sahu"
            width={55}
            height={55}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </button>

        {/* Desktop links - hidden on mobile, visible on md and up */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.25rem' 
          }} 
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  color: isActive ? '#00dcff' : 'rgba(255,255,255,0.6)',
                  background: isActive ? 'rgba(0,220,255,0.08)' : 'transparent',
                  border: isActive ? '1px solid rgba(0,220,255,0.2)' : '1px solid transparent',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.color = 'rgba(255,255,255,0.9)';
                    e.target.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = 'rgba(255,255,255,0.6)';
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* CTA section */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Hire Me button - hidden on mobile, visible on md and up */}
          <button
            onClick={() => handleNav('#contact')}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00dcff, #3b82f6)',
              color: '#050508',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              border: 'none',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
            className="hire-me-desktop"
            onMouseEnter={(e) => { e.target.style.opacity = '0.85'; e.target.style.transform = 'scale(1.04)'; }}
            onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)'; }}
          >
            Hire Me
          </button>

          {/* Mobile menu toggle - visible on mobile, hidden on md and up */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              padding: '0.4rem',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
            }}
            className="mobile-menu-toggle"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu - visible only when menuOpen is true */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: '1rem',
              right: '1rem',
              zIndex: 999,
              background: 'rgba(8, 8, 15, 0.95)',
              backdropFilter: 'blur(30px)',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
            className="mobile-menu"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  textAlign: 'left',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              style={{
                marginTop: '0.5rem',
                padding: '0.75rem',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #00dcff, #3b82f6)',
                color: '#050508',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        /* Hide desktop navigation on mobile */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hire-me-desktop {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
        }
        
        /* Show desktop navigation on medium screens and up */
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .hire-me-desktop {
            display: block !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        
        /* Hide mobile menu by default when not open */
        .mobile-menu {
          display: flex;
        }
      `}</style>
    </>
  );
}