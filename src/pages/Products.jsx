import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import TiltCard from '../components/TiltCard';
import { IC, CATS, PR } from '../data/electricData';

export default function Products({ onSelectProduct }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('category');

  const [cur, setCur] = useState(catParam !== null ? catParam : 'all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (catParam !== null) {
      setCur(catParam);
    }
  }, [catParam]);

  const handleChipClick = (val) => {
    setCur(val);
    if (val === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: val });
    }
  };

  const filteredProducts = PR.map((p, i) => ({ p, i })).filter(({ p }) => {
    const matchesCategory = cur === 'all' || p[0] === Number(cur);
    const matchesSearch = (p[1] + ' ' + p[2]).toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageBanner title="Our Products" subtitle="Browse by category. Tap a product for details." />

      <section className="s">
        <div className="w">
          {/* Search bar */}
          <div className="bar">
            <input
              className="sr"
              id="q"
              placeholder="Search products…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* Category Chips */}
          <div className="bar" id="cf">
            <button
              className={`chip ${cur === 'all' ? 'on' : ''}`}
              onClick={() => handleChipClick('all')}
            >
              All
            </button>
            {CATS.map((c, i) => (
              <button
                key={i}
                className={`chip ${String(cur) === String(i) ? 'on' : ''}`}
                onClick={() => handleChipClick(String(i))}
              >
                {c[0]}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="g g4" id="pg">
            {filteredProducts.map(({ p, i }) => (
              <TiltCard key={i} className="pcg" onClick={() => onSelectProduct(p)}>
                <div className="pi">{IC[p[0]]}</div>
                <div className="pb">
                  <span className="tag">{CATS[p[0]][0]}</span>
                  <h3>{p[1]}</h3>
                  <p>{p[2].slice(0, 70)}…</p>
                  <u>View details</u>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <p id="ne" style={{ textAlign: 'center', color: 'var(--mute)', marginTop: '24px' }}>
              No products found. Try another word or ask us on WhatsApp.
            </p>
          )}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
