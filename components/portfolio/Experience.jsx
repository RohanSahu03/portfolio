'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
 {
  company: 'Softreey Technologies Pvt. Ltd.',
  role: 'Full Stack Developer',
  location: 'Bangalore, KA, India',
  duration: 'March 2025 - January 2026',
  type: 'Full-time',
    description: 'Worked on full-stack web applications including 79er Global and Accucount 360, developing scalable features, AI-powered itinerary generation, REST APIs, authentication systems, and responsive user interfaces using the MERN stack and OpenAI APIs.',
  achievements: [
    'Integrated OpenAI APIs to build AI-based itinerary generation for 79er Global, providing personalized travel plans for users',
    'Developed and maintained modules for 79er Global and Accucount 360, improving application performance and user experience',
    'Built secure authentication and role-based access control using JWT and session management',
    'Created reusable React components and optimized API integration for faster development and maintainability',
  ],
  tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Redux', 'WebSocket', 'Tailwind CSS',],
  color: '#00dcff',
},
{
  company: 'Parnets Software India Pvt. Ltd.',
  role: 'Web Developer',
  location: 'Bangalore, KA, India',
  duration: 'March 2024 - February 2025',
  type: 'Full-time',
  description: 'Worked on full-stack web applications including Engineering Solutions ERP and DailyDish, developing responsive interfaces, backend APIs, authentication systems, and database-driven features using the MERN stack.',
  achievements: [
    'Developed ERP modules for managing quotations, invoices, inventory, purchase orders, and dispatch operations',
    'Built and integrated REST APIs with JWT authentication for secure user access and role management',
    'Implemented online food ordering and PhonePe payment gateway integration for the DailyDish platform',
    'Optimized frontend performance and improved user experience across admin dashboards and customer-facing applications',
  ],
  tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JavaScript'],
  color: '#3b82f6',
},
 
];

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ display: 'flex', gap: '1.5rem' }}
    >
      {/* Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width: 14, height: 14, borderRadius: '50%',
          background: exp.color,
          boxShadow: `0 0 16px ${exp.color}60`,
          marginTop: '1.5rem',
          flexShrink: 0,
        }} />
        {index < experiences.length - 1 && (
          <div style={{
            width: 1, flexGrow: 1, marginTop: '0.5rem',
            background: `linear-gradient(180deg, ${exp.color}40, transparent)`,
            minHeight: 40,
          }} />
        )}
      </div>

      {/* Card */}
      <div
        className="gradient-border-card"
        style={{ flex: 1, padding: '1.5rem', marginBottom: '1.5rem', cursor: 'pointer' }}
        onClick={() => setExpanded(!expanded)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f0f8' }}>{exp.company}</h3>
              <span style={{
                padding: '0.15rem 0.6rem', borderRadius: '100px',
                background: `${exp.color}15`, border: `1px solid ${exp.color}30`,
                color: exp.color, fontSize: '0.72rem', fontWeight: 500,
              }}>
                {exp.type}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500, marginBottom: '0.5rem' }}>
              {exp.role}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
                <Calendar size={12} />{exp.duration}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)' }}>
                <MapPin size={12} />{exp.location}
              </span>
            </div>
          </div>
          <button
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.3)', cursor: 'pointer', padding: '0.25rem', marginTop: '0.25rem' }}
            onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div style={{ paddingTop: '1.25rem' }}>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: '1rem' }}>
              {exp.description}
            </p>
            <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.25rem' }}>
              {exp.achievements.map((a, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ color: exp.color, marginTop: '0.35rem', flexShrink: 0 }}>▸</span>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{a}</span>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {exp.tech.map((t) => (
                <span key={t} style={{
                  padding: '0.2rem 0.6rem', borderRadius: '100px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', fontWeight: 500,
                  fontFamily: 'JetBrains Mono',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: '100px',
            background: 'rgba(0,220,255,0.06)', border: '1px solid rgba(0,220,255,0.15)',
            color: '#00dcff', fontSize: '0.75rem', fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono',
            marginBottom: '1rem',
          }}>
            Career Journey
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800,
            letterSpacing: '-0.02em', color: '#f0f0f8', lineHeight: 1.2,
          }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
