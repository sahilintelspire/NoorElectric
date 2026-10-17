import React from 'react';
import { Link } from 'react-router-dom';
import { CATS } from '../data/electricData';
import logoImg from '../assets/Logo.jpeg';

export default function Footer() {
  return (
    <footer>
      <div className="w">
        <div className="g">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <img
                src={logoImg}
                alt="Noor Electric Logo"
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--yel)',
                  display: 'block'
                }}
              />
              <div>
                <h4 style={{ margin: 0 }}>NOOR ELECTRIC</h4>
                <small style={{ color: 'var(--yel)', fontWeight: 600 }}>Tankaria</small>
              </div>
            </div>
            <p>
              All Electrical Items Under One Roof.<br />
              Quality Products, Best Service.
            </p>
          </div>

          <div>
            <h4>Pages</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div>
            <h4>Categories</h4>
            <div id="fc">
              {CATS.map((c, i) => (
                <Link key={i} to={`/products?category=${i}`}>
                  {c[0]}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4>Visit us</h4>
            <p>Miyaji Shopping, Ta. &amp; Dist. Bharuch, Tankaria – 392240</p>
            <a href="tel:+917698195687">Shafi Ipli: 7698195687</a>
            <a href="tel:+918140238599">Salman Ipli: 8140238599</a>
          </div>
        </div>

        <div className="cp">© 2026 Noor Electric. All rights reserved.</div>
      </div>
    </footer>
  );
}
