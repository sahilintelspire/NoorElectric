import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IC, CATS, PR } from '../data/electricData';
import TiltCard from '../components/TiltCard';
import AnimatedCounter from '../components/AnimatedCounter';
import CtaSection from '../components/CtaSection';
import { fetchCategories, fetchProducts } from '../services/api';

export default function Home({ onSelectProduct }) {
  const sliderRef = useRef(null);
  const [categories, setCategories] = useState(CATS);
  const [featuredProducts, setFeaturedProducts] = useState(PR.slice(0, 8));

  useEffect(() => {
    async function loadLiveData() {
      const liveCats = await fetchCategories();
      if (liveCats && liveCats.length > 0) {
        setCategories(liveCats.map((c) => [c.name, c.subtitle || '']));
      }
      const liveProds = await fetchProducts({ featured: 1 });
      if (liveProds && liveProds.length > 0) {
        setFeaturedProducts(
          liveProds.map((p) => [
            p.category_id ? (p.category_id - 1) % 7 : 0,
            p.name,
            p.short_description || p.full_description || '',
            Array.isArray(p.features) ? p.features : [],
          ])
        );
      }
    }
    loadLiveData();
  }, []);

  const scrollSlider = (offset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="w">
          <div className="in">
            <h1>
              Better Connection
              <span>Brighter Future</span>
            </h1>
            <p>
              Wires, switches, LED lights, MCBs, fans and more. All electrical items under one roof,
              with quality products and best service.
            </p>
            <div>
              <Link className="btn y" to="/products">
                Explore Products
              </Link>{' '}
              <Link className="btn o" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="bulbw">
            <svg viewBox="0 0 200 240">
              <circle className="glow" cx="100" cy="90" r="90" opacity="0" />
              <g strokeLinecap="round">
                <path
                  className="ray"
                  d="M100 4v-2M30 28l-8-8M170 28l8-8M8 90H0M192 90h8"
                  style={{ strokeDasharray: 14, strokeDashoffset: 14, strokeWidth: 6 }}
                />
              </g>
              <path
                className="bulbf"
                d="M100 20a62 62 0 0 0-36 112v26h72v-26A62 62 0 0 0 100 20z"
              />
              <path className="bolt" d="M108 52L82 100h20l-10 40 32-56h-20z" />
              <rect x="72" y="168" width="56" height="14" rx="7" fill="#fff" />
              <rect x="82" y="190" width="36" height="14" rx="7" fill="#fff" />
            </svg>

            {/* Floating badges */}
            <div className="fl" style={{ left: '2%', top: '10%' }}>
              {IC[0]}
            </div>
            <div className="fl" style={{ right: '4%', top: '6%', animationDelay: '1s' }}>
              {IC[1]}
            </div>
            <div className="fl" style={{ left: '6%', bottom: '8%', animationDelay: '2s' }}>
              {IC[4]}
            </div>
            <div className="fl" style={{ right: '2%', bottom: '14%', animationDelay: '3s' }}>
              {IC[3]}
            </div>

            {/* Spark particles */}
            {[10, 25, 40, 55, 70, 85].map((l, i) => (
              <i
                key={i}
                className="spark"
                style={{ left: `${l}%`, bottom: '10%', animationDelay: `${i * 0.7}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="mq">
        <div>
          {Array.from({ length: 4 }).map((_, repeatIndex) => (
            <React.Fragment key={repeatIndex}>
              {categories.map((c, i) => (
                <span key={`${repeatIndex}-${i}`}>⚡ {c[0]}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section className="s">
        <div className="w">
          <div className="hd rv in">
            <h2>Shop by Category</h2>
            <p>Tap any category to see its products.</p>
          </div>
          <div className="g g4">
            {categories.map((c, i) => (
              <Link key={i} to={`/products?category=${i}`} className="cat rv in">
                <div className="ic">{IC[i % 7]}</div>
                {c[0]}
                <small>{c[1]}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Counters */}
      <section className="s" style={{ background: 'var(--card)' }}>
        <div className="w g g2" style={{ alignItems: 'center' }}>
          <div className="rv in">
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}>
              Your trusted electrical shop in Tankaria
            </h2>
            <p style={{ color: 'var(--mute)' }}>
              Noor Electric brings everything for home, shop and office wiring in one place. Come to
              us for the right product, honest advice and friendly service.
            </p>
            <Link className="btn n" to="/about">
              Know More
            </Link>
          </div>

          <div className="g g3 st rv in" style={{ borderRadius: '24px', padding: '30px 10px' }}>
            <div>
              <AnimatedCounter target={categories.length || 7} />
              Categories
            </div>
            <div>
              <AnimatedCounter target={featuredProducts.length || 17} />
              Products listed
            </div>
            <div>
              <AnimatedCounter target={1} />
              Roof for all
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Slider */}
      <section className="s">
        <div className="w">
          <div className="hd rv in">
            <h2>Featured Products</h2>
            <p>Swipe to see more. Tap a product for full details.</p>
          </div>

          <div className="sl" ref={sliderRef}>
            {featuredProducts.map((p, i) => (
              <TiltCard key={i} onClick={() => onSelectProduct(p)}>
                <div className="pi">{IC[p[0]]}</div>
                <div className="pb">
                  <span className="tag">{categories[p[0]] ? categories[p[0]][0] : 'Product'}</span>
                  <h3>{p[1]}</h3>
                  <p>{p[2].slice(0, 70)}…</p>
                  <u>View details</u>
                </div>
              </TiltCard>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
            }}
          >
            <button className="ar" aria-label="Previous" onClick={() => scrollSlider(-270)}>
              ‹
            </button>
            <Link className="btn n" to="/products">
              View All Products
            </Link>
            <button className="ar" aria-label="Next" onClick={() => scrollSlider(270)}>
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Noor Electric */}
      <section className="s" style={{ background: 'var(--card)' }}>
        <div className="w">
          <div className="hd rv in">
            <h2>Why Choose Noor Electric</h2>
          </div>
          <div className="g g4">
            {[
              ['Quality Products', 'Reliable items for safe, long-lasting wiring.', 2],
              ['Best Service', 'Friendly help and advice from our team.', 5],
              ['Wide Range', 'Wires to fans, all in one shop.', 1],
              ['Easy Enquiry', 'Message us on WhatsApp anytime.', 6],
            ].map((f, i) => (
              <div key={i} className="ft rv in">
                <div className="ic">{IC[f[2]]}</div>
                <h3>{f[0]}</h3>
                <p>{f[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  );
}
