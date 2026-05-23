'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Star, GitFork, GitCommitVertical as GitCommit, Code as Code2, Users, TrendingUp } from 'lucide-react';


// Simple contribution graph
function ContributionGraph() {
  const weeks = 26;
  const days = 7;
  const cells = [];
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const rand = Math.random();
      let bg;
      if (rand > 0.75) bg = 'rgba(0,220,255,0.7)';
      else if (rand > 0.5) bg = 'rgba(0,220,255,0.4)';
      else if (rand > 0.25) bg = 'rgba(0,220,255,0.15)';
      else bg = 'rgba(255,255,255,0.04)';
      cells.push({ w, d, bg });
    }
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${weeks}, 12px)`,
        gridTemplateRows: `repeat(${days}, 12px)`,
        gap: 3,
        width: 'fit-content',
      }}>
        {cells.map((cell, i) => (
          <div
            key={i}
            title={`${Math.floor(Math.random() * 8)} contributions`}
            style={{
              gridColumn: cell.w + 1,
              gridRow: cell.d + 1,
              width: 12, height: 12,
              borderRadius: 3,
              background: cell.bg,
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={(e) => { e.target.style.outline = '1px solid rgba(0,220,255,0.5)'; }}
            onMouseLeave={(e) => { e.target.style.outline = 'none'; }}
          />
        ))}
      </div>
    </div>
  );
}

export default function GitHubStats() {
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
    <section id="github" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'absolute', top: '30%', left: '-5%',
        width: 350, height: 350,
        background: 'radial-gradient(circle, rgba(0,220,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{
              display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: '100px',
              background: 'rgba(0,220,255,0.06)', border: '1px solid rgba(0,220,255,0.15)',
              color: '#00dcff', fontSize: '0.75rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono',
              marginBottom: '1rem',
            }}>
              Open Source
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800,
              letterSpacing: '-0.02em', color: '#f0f0f8', lineHeight: 1.2,
            }}>
              GitHub <span className="gradient-text">Activity</span>
            </h2>
          </motion.div>

          {/* Contribution graph + recent activity */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="lg:grid-cols-3">

            {/* Contribution graph */}
            <motion.div
              variants={itemVariants}
              className="gradient-border-card"
              style={{ padding: '1.75rem', gridColumn: 'span 2' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Github size={18} color="#00dcff" />
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f0f0f8' }}>
                    Contribution Activity
                  </h3>
                </div>
                <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono' }}>
                  Last 6 months
                </span>
              </div>
              <ContributionGraph />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Less</span>
                {['rgba(255,255,255,0.04)', 'rgba(0,220,255,0.15)', 'rgba(0,220,255,0.4)', 'rgba(0,220,255,0.7)'].map((bg) => (
                  <div key={bg} style={{ width: 12, height: 12, borderRadius: 3, background: bg }} />
                ))}
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>More</span>
              </div>
            </motion.div>


          </div>

 
        </motion.div>
      </div>
    </section>
  );
}
