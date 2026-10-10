import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-bg"></div>
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Electrical Shop" 
              className="about-image"
            />
            <div className="experience-badge glass">
              <span className="years">15+</span>
              <span className="text">Years of<br/>Trust</span>
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title text-left" style={{textAlign: 'left'}}>
              About <span className="text-gradient">Noor Electric</span>
            </h2>
            <p className="about-desc">
              Established with a vision to provide top-quality electrical products, Noor Electric has been the trusted hub for residential and commercial electrical needs. We partner with the best brands to ensure safety, durability, and innovation in every product we sell.
            </p>
            
            <ul className="about-features">
              <li>
                <CheckCircle2 className="feature-icon" size={24} />
                <div>
                  <h4>100% Genuine Products</h4>
                  <p>We deal only in authentic and certified electrical brands.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 className="feature-icon" size={24} />
                <div>
                  <h4>Expert Consultation</h4>
                  <p>Our experienced team helps you choose the right solutions.</p>
                </div>
              </li>
              <li>
                <CheckCircle2 className="feature-icon" size={24} />
                <div>
                  <h4>Competitive Pricing</h4>
                  <p>Premium quality at wholesale and retail rates.</p>
                </div>
              </li>
            </ul>
            
            <div style={{ display: 'flex', marginTop: '1rem' }}>
              <button className="btn btn-primary">Know More About Us</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
