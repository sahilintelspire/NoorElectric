import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import { IC, CATS, CC, GI as defaultGi } from '../data/electricData';
import { fetchGallery } from '../services/api';

export default function Gallery({ onSelectGalleryItem }) {
  const [gc, setGc] = useState('All');
  const [galleryItems, setGalleryItems] = useState(defaultGi);

  useEffect(() => {
    async function loadLiveGallery() {
      const liveItems = await fetchGallery();
      if (liveItems && liveItems.length > 0) {
        setGalleryItems(
          liveItems.map((g, idx) => [
            g.category_type || 'Our Shop',
            g.category_id ? (g.category_id - 1) % 7 : idx % 7,
          ])
        );
      }
    }
    loadLiveGallery();
  }, []);

  const filteredItems = galleryItems.filter((g) => gc === 'All' || g[0] === gc);

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
