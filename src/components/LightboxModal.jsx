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

  const [type, catIndex, imgUrl, title] = item;

  return (
    <div id="lb" className="on" onClick={onClose}>
      <div
        style={{
          background: `linear-gradient(135deg, ${CC[catIndex] || '#1A3F96'}, #071433)`,
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center',
          padding: imgUrl ? '0' : '20px',
        }}
      >
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={title || type}
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '24px' }}
          />
        ) : (
          IC[catIndex]
        )}
      </div>
    </div>
  );
}
