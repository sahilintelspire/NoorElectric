import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../assets/Logo.jpeg';

export default function Header() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollWidth((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <div id="bar" style={{ width: `${scrollWidth}%` }} />
      <header>
        <div className="w">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src={logoImg}
              alt="Noor Electric Logo"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid var(--yel)',
                display: 'block'
              }}
            />
            <span>NOOR <b>ELECTRIC</b></span>
          </Link>

          <nav id="nv" className={mobileMenuOpen ? 'on' : ''}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'on' : '')} onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'on' : '')} onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'on' : '')} onClick={closeMenu}>
              Products
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'on' : '')} onClick={closeMenu}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'on' : '')} onClick={closeMenu}>
              Contact Us
            </NavLink>
          </nav>

          <a className="btn y" href="https://wa.me/917698195687" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>

          <button
            id="mb"
            aria-label="Menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}
