import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import { IC, CATS, TEAM, UserAvatarIcon, BoltBadgeIcon } from '../data/electricData';

export default function About() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Better Connection, Brighter Future" />

      {/* Who We Are */}
      <section className="s">
        <div className="w g g2" style={{ alignItems: 'center' }}>
          <div className="rv in pi" style={{ height: '320px', borderRadius: '24px' }}>
            <svg
              viewBox="0 0 64 64"
              style={{ width: '140px' }}
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M8 30L32 8l24 22M16 26v28h32V26" />
              <path d="M27 54V38h10v16" />
            </svg>
          </div>
          <div className="rv in">
            <h2 style={{ fontSize: '34px', fontWeight: 800 }}>Who we are</h2>
            <p style={{ color: 'var(--mute)' }}>
              Noor Electric is an electrical shop at Miyaji Shopping, Tankaria, Bharuch. We stock
              wires and cables, switches and sockets, LED lights, MCBs and DBs, fans, accessories
              and complete home and office electrical solutions.
            </p>
            <p style={{ color: 'var(--mute)' }}>
              Our promise is simple: <b>Quality Products, Best Service</b>. Whether you are wiring
              a new house or changing one bulb, we help you pick the right item.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="s" style={{ background: 'var(--card)' }}>
        <div className="w">
          <div className="hd rv in">
            <h2>Our Promise</h2>
          </div>
          <div className="g g2">
            {[
              [
                'Quality Products',
                'We choose items that are safe and built to last, so your wiring stays reliable.',
                2,
              ],
              [
                'Best Service',
                'Clear advice, quick answers and friendly support before and after you visit.',
                5,
              ],
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

      {/* Meet the Team */}
      <section className="s">
        <div className="w">
          <div className="hd rv in">
            <h2>Meet the Team</h2>
            <p>Reach us directly on WhatsApp.</p>
          </div>
          <div className="g g2">
            {TEAM.map((t, i) => (
              <div key={i} className="tm rv in">
                <div className="av">
                  <div>{UserAvatarIcon}</div>
                  <i>{BoltBadgeIcon}</i>
                </div>
                <h3>{t[0]}</h3>
                <p>Noor Electric · Tankaria</p>
                <div className="bt">
                  <a className="btn n" href={`tel:+${t[2]}`}>
                    Call {t[1]}
                  </a>
                  <a
                    className="btn y"
                    href={`https://wa.me/${t[2]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="s" style={{ background: 'var(--card)' }}>
        <div className="w">
          <div className="hd rv in">
            <h2>What We Offer</h2>
          </div>
          <div className="g g4">
            {CATS.map((c, i) => (
              <Link key={i} to={`/products?category=${i}`} className="cat rv in">
                <div className="ic">{IC[i]}</div>
                {c[0]}
                <small>{c[1]}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
