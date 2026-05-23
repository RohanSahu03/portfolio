'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Clock, CircleCheck as CheckCircle2, CircleAlert as AlertCircle, Github, Linkedin, Twitter, Instagram, Code2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const socialLinks = [
  { icon: Github, label: 'GitHub', handle: '@RohanSahu03', href: 'https://github.com/RohanSahu03', color: '#f0f0f8' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'Rohan Sahu', href: 'https://www.linkedin.com/in/rohan-kumar-sahu-b8b6071b4/', color: '#0ea5e9' },
  { icon: Code2, label: 'Leetcode', handle: '@Rohansahu', href: 'https://leetcode.com/u/Rohansahu/', color: '#f0f0f8' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sahurohankumar47@gmail.com', color: '#00dcff' },
  { icon: MapPin, label: 'Location', value: 'Bangalore, Karnataka', color: '#3b82f6' },
  { icon: Clock, label: 'Availability', value: 'Open to Full-Time', color: '#00f5b4' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');

      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setStatus(null), 5000);

    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 1 }}>
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,220,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {status === 'error' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#ff6b6b',
            marginBottom: '1rem',
          }}
        >
          <AlertCircle size={18} />
          Failed to send message. Please try again.
        </div>
      )}

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
              Get In Touch
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800,
              letterSpacing: '-0.02em', color: '#f0f0f8', lineHeight: 1.2,
            }}>
              Let's <span className="gradient-text">Work Together</span>
            </h2>
            <p style={{
              marginTop: '1rem', fontSize: '1rem', color: 'rgba(255,255,255,0.4)',
              maxWidth: 520, margin: '1rem auto 0', lineHeight: 1.7,
            }}>
              Whether you have a project in mind, want to collaborate, or just want to say hi —
              my inbox is always open.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="lg:grid-cols-5">
            {/* Left: info + social */}
            <motion.div
              variants={containerVariants}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', gridColumn: 'span 2' }}
            >
              {/* Contact info */}
              <motion.div variants={itemVariants} className="gradient-border-card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f0f0f8', marginBottom: '1.25rem' }}>
                  Contact Info
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {contactInfo.map(({ icon: Icon, label, value, color }) => (
                    <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: '10px',
                        background: `${color}10`, border: `1px solid ${color}20`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      }}>
                        <Icon size={15} color={color} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'JetBrains Mono' }}>
                          {label}
                        </div>
                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Social */}
              <motion.div variants={itemVariants} className="gradient-border-card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f0f0f8', marginBottom: '1.25rem' }}>
                  Follow Me
                </h3>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '0.75rem' }}>
                  {socialLinks.map(({ icon: Icon, label, handle, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.875rem',
                        padding: '0.75rem', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
                        textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = `${color}30`;
                        e.currentTarget.style.background = `${color}08`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      }}
                    >
                      <Icon size={16} color={color} />
                      <div>
                        <div style={{ fontSize: '0.83rem', color: '#f0f0f8', fontWeight: 500 }}>{label}</div>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>{handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              variants={itemVariants}
              className="gradient-border-card"
              style={{ padding: '2rem', gridColumn: 'span 3' }}
            >
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#f0f0f8', marginBottom: '1.5rem' }}>
                Send a Message
              </h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', gap: '1rem', padding: '3rem 1rem',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle2 size={48} color="#00f5b4" />
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f0f0f8' }}>Message Sent!</h4>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', maxWidth: 300 }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem', fontWeight: 500, letterSpacing: '0.04em' }}>
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem', fontWeight: 500, letterSpacing: '0.04em' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem', fontWeight: 500, letterSpacing: '0.04em' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry..."
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem', fontWeight: 500, letterSpacing: '0.04em' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="form-input"
                      style={{ resize: 'vertical', minHeight: 120 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                    style={{
                      padding: '0.9rem 2rem',
                      borderRadius: '10px',
                      background: status === 'sending'
                        ? 'rgba(0,220,255,0.15)'
                        : 'linear-gradient(135deg, #00dcff, #3b82f6)',
                      color: status === 'sending' ? '#00dcff' : '#050508',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      cursor: status === 'sending' ? 'not-allowed' : 'none',
                      border: status === 'sending' ? '1px solid rgba(0,220,255,0.3)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'opacity 0.2s',
                      alignSelf: 'flex-start',
                      minWidth: 160,
                    }}
                  >
                    {status === 'sending' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ width: 16, height: 16, border: '2px solid rgba(0,220,255,0.3)', borderTopColor: '#00dcff', borderRadius: '50%' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
