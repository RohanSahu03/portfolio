'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#050508',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            style={{ marginBottom: '2.5rem' }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, rgba(0,220,255,0.15), rgba(59,130,246,0.1))',
                border: '1px solid rgba(0,220,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#00dcff',
                fontFamily: 'Space Grotesk',
                boxShadow: '0 0 30px rgba(0,220,255,0.2)',
              }}
            >
              AC
            </div>
          </motion.div>

          {/* Progress bar */}
          <div
            style={{
              width: 200,
              height: 2,
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 2,
              overflow: 'hidden',
            }}
          >
            <motion.div
              className="loading-bar"
              style={{
                height: '100%',
                borderRadius: 2,
                width: `${Math.min(progress, 100)}%`,
                transition: 'width 0.1s ease',
              }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              marginTop: '1rem',
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            Loading Experience
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
