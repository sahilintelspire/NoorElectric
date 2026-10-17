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

  const [catIndex, title, desc, features, image] = product;

  return (
    <div
      id="md"
      className="on"
      onClick={(e) => {
        if (e.target.id === 'md') onClose();
      }}
    >
      <div className="mc">
        <div className="pi">
          {image ? (
            <img
              src={image}
              alt={title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextElementSibling) {
                  e.target.nextElementSibling.style.display = 'grid';
                }
              }}
            />
          ) : null}
          <div
            style={{
              display: image ? 'none' : 'grid',
              placeItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            {IC[catIndex]}
          </div>
        </div>
        <div className="mt">
          <button className="x" id="mx" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <span className="tag">{CATS[catIndex] ? CATS[catIndex][0] : 'Product'}</span>
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
