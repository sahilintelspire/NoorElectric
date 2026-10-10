import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Fan, ShieldCheck } from 'lucide-react';
import './Categories.css';

const categories = [
  {
    id: 1,
    name: 'Lighting',
    icon: <Lightbulb size={40} />,
    desc: 'LED bulbs, panels & decorative lights',
    color: '#3b82f6'
  },
  {
    id: 2,
    name: 'Switchgear',
    icon: <Zap size={40} />,
    desc: 'Modular switches, MCBs & boards',
    color: '#8b5cf6'
  },
  {
    id: 3,
    name: 'Fans',
    icon: <Fan size={40} />,
    desc: 'Ceiling, exhaust & pedestal fans',
    color: '#10b981'
  },
  {
    id: 4,
    name: 'Wires & Cables',
    icon: <ShieldCheck size={40} />,
    desc: 'House wires & industrial cables',
    color: '#f59e0b'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Categories = () => {
  return (
    <section id="categories" className="categories-section">
      <div className="container">
        <div className="section-header text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Shop by <span className="text-gradient">Categories</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            We offer a wide range of electrical solutions to meet all your residential and commercial needs.
          </motion.p>
        </div>

        <motion.div 
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.id} variants={itemVariants} className="category-card glass">
              <div className="category-icon-wrapper" style={{ color: cat.color }}>
                {cat.icon}
                <div className="icon-glow" style={{ background: cat.color }}></div>
              </div>
              <h3 className="category-name">{cat.name}</h3>
              <p className="category-desc">{cat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
