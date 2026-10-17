import React, { useEffect } from 'react';
import { IC, CC } from '../data/electricData';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const catIndex = item[1];

  return (
    <div id="lb" className="on" onClick={onClose}>
      <div style={{ background: `linear-gradient(135deg, ${CC[catIndex]}, #071433)` }}>
        {IC[catIndex]}
      </div>
    </div>
  );
}
