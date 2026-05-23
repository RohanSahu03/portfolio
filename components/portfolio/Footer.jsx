'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];


  const socials = [
    { icon: Github, href: 'https://github.com/RohanSahu03', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rohan-kumar-sahu-b8b6071b4/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sahurohankumar47@gmail.com', label: 'Email' },
  ];

  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid rgba(255,255,255,0.05)',
      padding: '3rem 1.5rem 2rem',
    }}>
      {/* Top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '60%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(0,220,255,0.3), transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'flex-start', gap: '2rem', marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 44, height: 44, borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(0,220,255,0.12), rgba(59,130,246,0.08))',
              border: '1px solid rgba(0,220,255,0.2)',
              color: '#00dcff', fontWeight: 700, fontSize: '1rem',
              marginBottom: '0.875rem', fontFamily: 'Space Grotesk',
            }}>
              RS
            </div>
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
              Full Stack Developer crafting elegant digital experiences that live at the intersection of art and engineering.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: 'JetBrains Mono' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: 'none', border: 'none', textAlign: 'left',
                    fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', cursor: 'pointer',
                    transition: 'color 0.2s', padding: 0,
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#00dcff'; }}
                  onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.45)'; }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', fontFamily: 'JetBrains Mono' }}>
              Connect
            </h4>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  style={{
                    width: 36, height: 36, borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)', textDecoration: 'none', cursor: 'pointer',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00dcff';
                    e.currentTarget.style.borderColor = 'rgba(0,220,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
