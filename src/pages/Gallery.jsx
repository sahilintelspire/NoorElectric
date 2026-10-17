import React, { useState, useEffect } from 'react';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import { IC, CATS, CC, GI as defaultGi } from '../data/electricData';
import { fetchGallery, getStorageUrl } from '../services/api';

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
            getStorageUrl(g.image, g.image_url, defaultGi[idx] ? defaultGi[idx][2] : null),
            g.title || 'Noor Electric',
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
                {g[2] ? (
                  <img
                    src={g[2]}
                    alt={g[3] || g[0]}
                    loading="lazy"
                    onError={(e) => {
                      const fallback = defaultGi[i] && defaultGi[i][2];
                      if (fallback && e.target.src !== fallback) {
                        e.target.src = fallback;
                      } else {
                        e.target.style.display = 'none';
                        if (e.target.nextElementSibling) {
                          e.target.nextElementSibling.style.display = 'grid';
                        }
                      }
                    }}
                  />
                ) : null}
                <div
                  style={{
                    display: g[2] ? 'none' : 'grid',
                    placeItems: 'center',
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {IC[g[1]]}
                </div>
                <span>
                  {CATS[g[1]] ? CATS[g[1]][0] : g[0]} · {g[3] || g[0]}
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
