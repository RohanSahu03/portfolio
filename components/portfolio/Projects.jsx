'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, Star, GitFork } from 'lucide-react';
import img1 from '../../public/images/79er.png';
import Image from 'next/image';
import img2 from '../../public/images/accucount.png';
import img3 from '../../public/images/dailydish.png';

const projects = [
{
  title: '79er Globe Traveller',
  subtitle: 'AI-Powered Group Travel Planning Platform',
  description: 'A collaborative travel platform that helps users plan trips, manage expenses, vote on activities, chat in real-time, and generate AI-powered itineraries.',
  longDescription: '79er Globe Traveller is a full-stack travel management platform designed for both travelers and travel agencies. The application allows users to create trips, invite groups, collaborate on travel ideas, vote on activities, track shared expenses, and manage trip members seamlessly. Built using the MERN stack, the platform includes secure authentication with Google and Apple login, Stripe integration for subscription-based features, real-time chat functionality, and SOS safety alerts. One of the key features is the AI-powered itinerary generator built using OpenAI APIs, which creates personalized travel plans based on user preferences and trip details.',
  image: img1,
  tech: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'OpenAI API',
    'Stripe',
    'Socket.io'
  ],
  // github: 'https://github.com',
  demo: 'https://play.google.com/store/apps/details?id=com.seventy_nine_er.user',
  color: '#00dcff',

},
 {
  title: 'Accucount 360',
  subtitle: 'Enterprise Inventory & Stock Management Platform',
  description: 'A scalable inventory and warehouse management platform built for real-time stock-taking, zone tracking, team operations, and enterprise reporting workflows.',
  longDescription: 'Accucount 360 is an enterprise-grade inventory and stock-taking platform developed for ACREBIS Pte Ltd. The platform supports real-time warehouse operations including zone-based stock counting, barcode tagging, issue resolution, team management, close-out workflows, and reporting. Built using Node.js, Express.js, and MongoDB, the system includes a multi-tenant admin platform with role-based access control (RBAC), customer and event management, and scalable REST APIs for seamless web and mobile integration. The application was optimized for large inventory datasets using MongoDB aggregation pipelines and indexing strategies to improve reporting and reconciliation performance.',
  image: img2,
  tech: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST API',
    'JWT',
    'RBAC',
    'Redis',
  ],
  // github: 'https://github.com',
  demo: 'https://admin.acrebis.com/',
  stars: 86,
  forks: 14,
  color: '#3b82f6',

},
 {
  title: 'DailyDish',
  subtitle: 'Online Food Ordering & Delivery Platform',
  description: 'A food delivery platform designed for corporates and apartment communities with scheduled meal delivery, online payments, and order management.',
  longDescription: 'DailyDish is a full-stack food ordering and delivery application developed for managing lunch and dinner deliveries across corporates and residential apartments. The platform allows users to browse meals, place orders, select delivery time slots, and make secure online payments through PhonePe integration. It also includes admin features for order management, customer handling, address requests, and delivery tracking. Built using the MERN stack, the application focuses on responsive user experience, secure authentication, and efficient order processing workflows.',
  image: img3,
  tech: [
    'React.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Redux',
    'JWT',
    'PhonePe Payment Gateway'
  ],

  demo: 'https://dailydish.in',

  color: '#00f5b4',
  featured: false,
}
];

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 5000,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
        backdropFilter: 'blur(8px)',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 40 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 680, width: '100%',
          background: 'rgba(10, 10, 18, 0.98)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '1.25rem',
          overflow: 'hidden',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <div style={{ position: 'relative' }}>
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,18,0.95))',
          }} />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '50%', width: 32, height: 32,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', cursor: 'pointer',
            }}
          >
            <X size={14} />
          </button>
        </div>
        <div style={{ padding: '1.5rem 2rem 2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '0.25rem' }}>
              {project.title}
            </h3>
            <p style={{ color: project.color, fontSize: '0.85rem', fontWeight: 500 }}>{project.subtitle}</p>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            {project.longDescription || project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {project.tech.map((t) => (
              <span key={t} style={{
                padding: '0.25rem 0.7rem', borderRadius: '100px',
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', fontFamily: 'JetBrains Mono',
              }}>
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                flex: 1, padding: '0.75rem', borderRadius: '10px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#f0f0f8', fontSize: '0.88rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none', transition: 'background 0.2s',
              }}
            >
              <Github size={16} /> GitHub
            </a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              style={{
                flex: 1, padding: '0.75rem', borderRadius: '10px',
                background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
                border: `1px solid ${project.color}40`,
                color: project.color, fontSize: '0.88rem', fontWeight: 600,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                textDecoration: 'none',
              }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="gradient-border-card card-hover"
        style={{ overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setShowModal(true)}
      >
        {/* Image */}
        <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
            onMouseEnter={(e) => { e.target.style.transform = 'scale(1.07)'; }}
            onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,18,0.9))',
          }} />
  

        </div>

        {/* Content */}
        <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f0f0f8', marginBottom: '0.2rem' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.78rem', color: project.color, fontWeight: 500, marginBottom: '0.75rem' }}>
            {project.subtitle}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, marginBottom: '1rem' }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} style={{
                padding: '0.18rem 0.55rem', borderRadius: '100px',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontFamily: 'JetBrains Mono',
              }}>
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {/* <a href={project.github} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1, padding: '0.5rem', borderRadius: '8px',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem',
                textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#f0f0f8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <Github size={13} /> Code
            </a> */}
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1, padding: '0.5rem', borderRadius: '8px',
                background: `${project.color}10`, border: `1px solid ${project.color}25`,
                color: project.color, fontSize: '0.8rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem',
                textDecoration: 'none',
              }}
            >
              <ExternalLink size={13} /> Demo
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            Portfolio
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800,
            letterSpacing: '-0.02em', color: '#f0f0f8', lineHeight: 1.2,
          }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{
            marginTop: '1rem', fontSize: '1rem', color: 'rgba(255,255,255,0.4)',
            maxWidth: 520, margin: '1rem auto 0',
          }}>
            A selection of projects I'm proud of — click any card to explore details.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
