import React from 'react';
import { motion } from 'framer-motion';
import './Brands.css';

const brands = [
  { id: 1, name: 'Havells', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Havells_Logo.svg' },
  { id: 2, name: 'Polycab', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Polycab_Logo.png/800px-Polycab_Logo.png' },
  { id: 3, name: 'Anchor', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Panasonic_logo_%28Blue%29.svg/800px-Panasonic_logo_%28Blue%29.svg.png' },
  { id: 4, name: 'Legrand', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Legrand_logo.svg/800px-Legrand_logo.svg.png' },
  { id: 5, name: 'Crompton', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Crompton_Greaves_Consumer_Electricals_Limited_Logo.svg/800px-Crompton_Greaves_Consumer_Electricals_Limited_Logo.svg.png' },
];

const Brands = () => {
  return (
    <section className="brands-section glass">
      <div className="container text-center">
        <p className="brands-title">Authorized Dealer For Top Brands</p>
        <div className="brands-marquee-container">
          <div className="brands-marquee">
            {/* Double the list for seamless infinite scroll effect */}
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="brand-item">
                <span className="brand-text">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
