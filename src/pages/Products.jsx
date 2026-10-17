import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import TiltCard from '../components/TiltCard';
import { IC, CATS as defaultCats, PR as defaultPr } from '../data/electricData';
import { fetchCategories, fetchProducts, getStorageUrl } from '../services/api';

export default function Products({ onSelectProduct }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const catParam = searchParams.get('category');

  const [cur, setCur] = useState(catParam !== null ? catParam : 'all');
  const [query, setQuery] = useState('');
  const [categories, setCategories] = useState(defaultCats);
  const [productsList, setProductsList] = useState(defaultPr);

  useEffect(() => {
    async function loadLiveData() {
      const liveCats = await fetchCategories();
      if (liveCats && liveCats.length > 0) {
        setCategories(liveCats.map((c) => [c.name, c.subtitle || '']));
      }
      const liveProds = await fetchProducts();
      if (liveProds && liveProds.length > 0) {
        setProductsList(
          liveProds.map((p, idx) => [
            p.category_id ? (p.category_id - 1) % 7 : 0,
            p.name,
            p.short_description || p.full_description || '',
            Array.isArray(p.features) ? p.features : [],
            getStorageUrl(p.image, p.image_url, defaultPr[idx] ? defaultPr[idx][4] : null),
          ])
        );
      }
    }
    loadLiveData();
  }, []);

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

  const filteredProducts = productsList
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => {
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
            {categories.map((c, i) => (
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
                <div className="pi">
                  {p[4] ? (
                    <img
                      src={p[4]}
                      alt={p[1]}
                      loading="lazy"
                      onError={(e) => {
                        const fallback = defaultPr[i] && defaultPr[i][4];
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
                      display: p[4] ? 'none' : 'grid',
                      placeItems: 'center',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    {IC[p[0]]}
                  </div>
                </div>
                <div className="pb">
                  <span className="tag">{categories[p[0]] ? categories[p[0]][0] : 'Product'}</span>
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
