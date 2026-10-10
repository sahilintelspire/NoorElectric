import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Ceiling Fan Pro X',
    category: 'Fans',
    image: 'https://images.unsplash.com/photo-1595856429994-432d667c4ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'High-speed BLDC motor fan with remote control.'
  },
  {
    id: 2,
    name: 'LED Panel Light 15W',
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Ultra-slim LED panel for modern ceiling designs.'
  },
  {
    id: 3,
    name: 'Heavy Duty Copper Cable',
    category: 'Cables',
    image: 'https://images.unsplash.com/photo-1558227691-41ea78d1f631?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Fire-resistant, 99.9% pure copper cables.'
  },
  {
    id: 4,
    name: 'Modular Switch Board',
    category: 'Switchgear',
    image: 'https://images.unsplash.com/photo-1558500203-b5d179d6c4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Elegant modular switches with silver contacts.'
  },
  {
    id: 5,
    name: 'Exhaust Fan Series',
    category: 'Fans',
    image: 'https://images.unsplash.com/photo-1588661601006-dc28a1155986?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Noiseless ventilation for kitchens and bathrooms.'
  },
  {
    id: 6,
    name: 'Street LED Light 50W',
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1517409259160-53bc326c710d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    desc: 'Weather-proof outdoor lighting solution.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured <span className="text-gradient">Products</span>
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore our wide range of premium electrical appliances and accessories. High quality meets modern aesthetics.
          </motion.p>
        </div>

        <motion.div 
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants} className="product-card glass">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-category">{product.category}</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <button className="view-details-btn">
                  Details <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button className="btn btn-outline">View All Categories</button>
        </div>
      </div>
    </section>
  );
};

export default Products;
