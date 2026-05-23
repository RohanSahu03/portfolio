'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Code2 } from 'lucide-react';
import Image from 'next/image';
import img from '../../public/images/rohanpic.jpeg'

const roles = ['Full Stack Developer', 'Problem Solver', 'MERN Stack Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const timeout = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout.current = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, typing, roleIndex]);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 1.5rem',
      }}
    >
      {/* Ambient glows */}
      <div style={{
        position: 'absolute', top: '15%', left: '10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(0,220,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '8%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          paddingTop: '5rem',
        }}
      >
        {/* Badge */}
        {/* <motion.div variants={itemVariants} style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
          <span style={{
            padding: '0.35rem 1rem',
            borderRadius: '100px',
            background: 'rgba(0,220,255,0.08)',
            border: '1px solid rgba(0,220,255,0.2)',
            color: '#00dcff',
            fontSize: '0.8rem',
            fontWeight: 500,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'JetBrains Mono, monospace',
          }}>
            Available for hire
          </span>
        </motion.div> */}

        {/* <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div  style={{ position: 'relative', display: 'inline-block' }}>
            <div  style={{
              width: 120, height: 120, borderRadius: '50%',
              background: 'linear-gradient(135deg, #00dcff22, #3b82f622)',
              border: '2px solid rgba(0,220,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2.75rem', fontWeight: 700, color: '#00dcff',
              position: 'relative',
            }}>
              <Image
                src={img}
                alt=  "RS"
         className="rounded-full"

              />
          
              <div style={{
                position: 'absolute',
                width: 120, height: 120,
                borderRadius: '50%',
                border: '1px dashed rgba(0,220,255,0.2)',
                top: '10%', left: '10%',
                transform: 'translate(-50%, -50%)',
              }} className="animate-spin-slow" />
            </div>
          </div>
        </motion.div> */}

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '0.5rem',
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: '#f0f0f8' }}>Rohan </span>
          <span className="gradient-text">Sahu</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          variants={itemVariants}
          style={{
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
          }}
        >
          <span style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'rgba(255,255,255,0.5)',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 400,
          }}>
            {displayed}
            <span className="animate-blink" style={{ color: '#00dcff' }}>|</span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: '580px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          I craft elegant digital experiences that live at the intersection of
          <span style={{ color: 'rgba(0,220,255,0.8)' }}> art</span> and
          <span style={{ color: 'rgba(59,130,246,0.8)' }}> engineering</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '3rem' }}
        >
          <button
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.875rem 2rem',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00dcff, #3b82f6)',
              color: '#050508',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: 'none',
              letterSpacing: '0.02em',
              transition: 'opacity 0.2s, transform 0.2s',
              boxShadow: '0 8px 32px rgba(0,220,255,0.25)',
            }}
            onMouseEnter={(e) => { e.target.style.opacity = '0.88'; e.target.style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)'; }}
          >
            View Projects
          </button>

          <a
            href="https://drive.google.com/file/d/1Nm73SJgxvPSbLs9UMUVrbjz9SMSGfmH2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{
              padding: '0.875rem 2rem',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              letterSpacing: '0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'border-color 0.2s, background 0.2s',
              textDecoration: 'none',
            }}
          >
            <Download size={16} />
            Resume
          </a>

          <button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            style={{
              padding: '0.875rem 2rem',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              letterSpacing: '0.02em',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,220,255,0.4)';
              e.currentTarget.style.background = 'rgba(0,220,255,0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
            }}
          >
            <Mail size={16} />
            Contact
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}
        >
          {[
            { icon: Github, href: 'https://github.com/RohanSahu03', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/rohan-kumar-sahu-b8b6071b4/', label: 'LinkedIn' },
            { icon: Code2, href: 'https://leetcode.com/u/Rohansahu/', label: 'LeetCode' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              style={{
                width: 40, height: 40, borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00dcff';
                e.currentTarget.style.borderColor = 'rgba(0,220,255,0.3)';
                e.currentTarget.style.background = 'rgba(0,220,255,0.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '0.5rem', color: 'rgba(255,255,255,0.25)',
          }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono' }}>
            scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
