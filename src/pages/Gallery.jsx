import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import { IC, CATS, CC, GI } from '../data/electricData';

export default function Gallery({ onSelectGalleryItem }) {
  const [gc, setGc] = useState('All');

  const filteredItems = GI.filter((g) => gc === 'All' || g[0] === gc);

  return (
    <>
      <PageBanner title="Gallery" subtitle="Our shop and products" />

      <section className="s">
        <div className="w">
          {/* Chips */}
          <div className="bar" id="gf">
            {['All', 'Our Shop', 'Products', 'Installations'].map((c) => (
              <button
                key={c}
                className={`chip ${gc === c ? 'on' : ''}`}
                onClick={() => setGc(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="g g4" id="gg">
            {filteredItems.map((g, i) => (
              <div
                key={i}
                className="gt pcg"
                style={{ background: `linear-gradient(135deg, ${CC[g[1]]}, #071433)` }}
                onClick={() => onSelectGalleryItem(g)}
              >
                {IC[g[1]]}
                <span>
                  {CATS[g[1]][0]} · {g[0]}
                </span>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: 'var(--mute)', marginTop: '24px' }}>
            Sample tiles shown. Real shop photos can be added here.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
