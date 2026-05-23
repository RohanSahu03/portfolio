'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const trailSpringConfig = { damping: 40, stiffness: 150, mass: 1 };
  const trailSpringX = useSpring(trailX, trailSpringConfig);
  const trailSpringY = useSpring(trailY, trailSpringConfig);

  const isHovering = useRef(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor="pointer"]');
      isHovering.current = !!el;
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="custom-cursor"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#00dcff',
            boxShadow: '0 0 10px rgba(0, 220, 255, 0.8)',
          }}
        />
      </motion.div>

      {/* Ring trail */}
      <motion.div
        className="custom-cursor"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1.5px solid rgba(0, 220, 255, 0.4)',
            background: 'transparent',
          }}
        />
      </motion.div>
    </>
  );
}
