import React, { useEffect } from 'react';
import { IC, CATS, wl } from '../data/electricData';

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const [catIndex, title, desc, features] = product;

  return (
    <div
      id="md"
      className="on"
      onClick={(e) => {
        if (e.target.id === 'md') onClose();
      }}
    >
      <div className="mc">
        <div className="pi">{IC[catIndex]}</div>
        <div className="mt">
          <button className="x" id="mx" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <span className="tag">{CATS[catIndex][0]}</span>
          <h2 style={{ margin: '10px 0' }}>{title}</h2>
          <p style={{ color: 'var(--mute)' }}>{desc}</p>
          <ul>
            {features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <br />
          <a
            className="btn y"
            href={wl(`Hello Noor Electric, I want details about: ${title}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
