import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Zap, ShieldCheck, Star } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    id: 1,
    title: "Light Up Your World With",
    highlight: "Modern Electricals",
    subtitle: "Discover top-notch quality fans, lighting, cables, and switchgears. Noor Electric provides the most reliable and stylish products for your home and business.",
    badge: "Premium Electrical Hub",
    badgeIcon: <Zap size={16} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 2,
    title: "High Performance",
    highlight: "Wires & Cables",
    subtitle: "Safety first with our fire-resistant, pure copper cables for all your residential and commercial needs.",
    badge: "Certified Safety",
    badgeIcon: <ShieldCheck size={16} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1558227691-41ea78d1f631?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    id: 3,
    title: "Elegant & Smart",
    highlight: "Lighting Solutions",
    subtitle: "Transform your spaces with our energy-efficient and highly durable LED lighting panels.",
    badge: "Energy Efficient",
    badgeIcon: <Star size={16} className="text-primary" />,
    image: "https://images.unsplash.com/photo-1517409259160-53bc326c710d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <section id="home" className="hero-slider-section">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="hero-slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-slide-bg" style={{ backgroundImage: `url(${slides[current].image})` }}>
            <div className="hero-overlay"></div>
          </div>
          
          <div className="container hero-container text-left">
            <div className="hero-content">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="badge glass" style={{ color: 'var(--text-main)' }}>
                  {slides[current].badgeIcon} {slides[current].badge}
                </span>
              </motion.div>
              
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {slides[current].title} <br />
                <span className="text-gradient">{slides[current].highlight}</span>
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {slides[current].subtitle}
              </motion.p>
              
              <motion.div 
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ marginTop: '1rem' }}
              >
                <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Explore Products <ArrowRight size={20} />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="slider-controls">
        <button onClick={prevSlide} className="slider-btn glass"><ChevronLeft size={24} /></button>
        <button onClick={nextSlide} className="slider-btn glass"><ChevronRight size={24} /></button>
      </div>
      
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button 
            key={index} 
            className={`slider-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
