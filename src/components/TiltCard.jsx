import React, { useRef } from 'react';

export default function TiltCard({ children, className = '', onClick }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (el) {
      el.style.transform = '';
    }
  };

  return (
    <div
      ref={cardRef}
      className={`pc ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
