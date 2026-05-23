'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code as Code2, Lightbulb, Rocket, Heart } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '60+', label: 'Projects Shipped' },
  { value: '30+', label: 'Happy Clients' },
  { value: '15+', label: 'Open Source Repos' },
];

const traits = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code that teams love to work with.' },
  { icon: Lightbulb, title: 'Creative Thinker', desc: 'Turning complex problems into elegant, intuitive solutions.' },
  { icon: Rocket, title: 'Performance First', desc: 'Obsessed with speed, accessibility, and user experience.' },
  { icon: Heart, title: 'Passionate Builder', desc: 'Genuinely love what I do — it shows in every pixel.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <span style={{
              display: 'inline-block',
              padding: '0.3rem 0.9rem',
              borderRadius: '100px',
              background: 'rgba(0,220,255,0.06)',
              border: '1px solid rgba(0,220,255,0.15)',
              color: '#00dcff',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontFamily: 'JetBrains Mono',
              marginBottom: '1rem',
            }}>
              About Me
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#f0f0f8',
              lineHeight: 1.2,
            }}>
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>
          </motion.div>

          {/* Main content */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="lg:grid-cols-2">
            {/* Text */}
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'center' }}>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontWeight: 400 }}>
                I'm a Full Stack Developer specializing in the MERN stack and Java technologies, passionate about building
                scalable web applications with clean architecture and seamless user experiences. From responsive frontend
                interfaces to secure backend systems, I enjoy turning ideas into real-world products.
              </p>

              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                With hands-on experience in React.js, Next.js, Node.js, Spring Boot, MySQL, and MongoDB. I focus on writing maintainable
                code, designing efficient APIs, and building applications that are fast, reliable, and scalable.
              </p>

              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>
                Beyond coding, I enjoy exploring Microservices, Cloud technologies, and modern development practices.
                I’m always excited to learn new technologies, solve challenging problems, and create impactful digital experiences.
              </p>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
