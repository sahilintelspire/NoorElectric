import React from 'react';
import { Zap, Mail, Phone, MapPin, Globe, Share2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="logo-container mb-4">
              <Zap className="logo-icon text-gradient" size={28} />
              <h2 className="logo-text" style={{fontSize: '1.25rem'}}>
                Noor<span className="text-gradient">Electric</span>
              </h2>
            </div>
            <p className="footer-desc">
              Your trusted partner for all electrical needs. We provide high-quality, reliable, and energy-efficient products for modern homes and businesses.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Share2 size={20} /></a>
              <a href="#" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products Catalog</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Ceiling Fans</a></li>
              <li><a href="#">LED Lighting</a></li>
              <li><a href="#">Switches & Sockets</a></li>
              <li><a href="#">Wires & Cables</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={18} className="contact-icon" />
                <span>Shop No. 12, Main Market Road, City Center</span>
              </li>
              <li>
                <Phone size={18} className="contact-icon" />
                <span>+91 98765 43210</span>
              </li>
              <li>
                <Mail size={18} className="contact-icon" />
                <span>info@noorelectric.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Noor Electric. All rights reserved.</p>
          <p className="built-with">Built with ❤️ for modern shops</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
