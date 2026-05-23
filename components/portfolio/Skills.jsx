'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';


const techBadges = [
  'React.js', 'Next.js', 'Javascript', 'Node.js', 'Express.js', 'Redux toolkit','Tanstack Query',
  'MongoDB', 'Redis', 'MySql', 'Java','Spring Boot','Spring MVC',
  'Tailwind CSS', 'VSCode',
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono' }}>{level}%</span>
      </div>
      <div style={{
        height: 4, borderRadius: 4,
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            height: '100%',
            borderRadius: 4,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 10px ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      {/* Bg accent */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >

          {/* Tech badge cloud */}
          <motion.div variants={itemVariants}>
            <h3 style={{
              textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.35)',
              fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: '1.5rem', fontFamily: 'JetBrains Mono',
            }}>
              Technologies I work with
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  style={{
                    padding: '0.35rem 0.875rem',
                    borderRadius: '100px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.55)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    cursor: 'default',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0,220,255,0.3)';
                    e.currentTarget.style.color = '#00dcff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
