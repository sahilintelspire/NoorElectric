import React from 'react';

export const WA = '917698195687';
export const wl = (t) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;

// SVG Icons
export const IC = [
  // 0: Wires & Cables
  <svg key="0" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="32" r="24" /><circle cx="32" cy="32" r="15" /><circle cx="32" cy="32" r="6" />
  </svg>,
  // 1: Switches & Sockets
  <svg key="1" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12" y="8" width="40" height="48" rx="8" /><rect x="24" y="18" width="16" height="28" rx="4" /><path d="M32 22v8" />
  </svg>,
  // 2: LED Lights & Bulbs
  <svg key="2" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 6a18 18 0 0 0-10 33v8h20v-8A18 18 0 0 0 32 6z" /><path d="M24 54h16M27 60h10" />
  </svg>,
  // 3: MCB & DB
  <svg key="3" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="8" width="44" height="48" rx="6" /><path d="M20 20v12M32 20v12M44 20v12M18 44h28" />
  </svg>,
  // 4: Fans & Appliances
  <svg key="4" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="32" r="5" /><path d="M32 27C28 10 40 6 42 14c1 6-6 11-10 13zM37 32c17-4 21 8 13 11-6 2-11-5-13-11zM27 32c-4 17-16 15-15 7 1-6 8-8 15-7z" />
  </svg>,
  // 5: Electrical Accessories
  <svg key="5" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 8v16M44 8v16M14 24h36v8a18 18 0 0 1-36 0zM32 50v10" />
  </svg>,
  // 6: Home & Office Solutions
  <svg key="6" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 30L32 8l24 22M16 26v28h32V26" /><path d="M27 54V38h10v16" />
  </svg>
];

export const PhoneIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8h10l4 12-6 4a28 28 0 0 0 16 16l4-6 12 4v10a6 6 0 0 1-6 6C26 54 10 38 10 14a6 6 0 0 1 6-6z" />
  </svg>
);

export const InstagramIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="8" width="48" height="48" rx="14" /><circle cx="32" cy="32" r="11" /><circle cx="46" cy="18" r="2" />
  </svg>
);

export const UserAvatarIcon = (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="22" r="12" /><path d="M10 56c2-14 12-20 22-20s20 6 22 20" />
  </svg>
);

export const BoltBadgeIcon = (
  <svg viewBox="0 0 64 64" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M36 4L14 36h16l-4 24 24-34H34z" />
  </svg>
);

export const BulbLogoIcon = (
  <svg width="32" viewBox="0 0 100 130">
    <path d="M50 8a34 34 0 0 0-20 61v14h40V69A34 34 0 0 0 50 8z" fill="#FFC20E" />
    <rect x="32" y="90" width="36" height="8" rx="4" fill="#fff" />
    <rect x="38" y="104" width="24" height="8" rx="4" fill="#fff" />
  </svg>
);

export const CATS = [
  ['Wires & Cables', 'Copper wires, house wiring, flexible cables'],
  ['Switches & Sockets', 'Modular switches, plates, sockets'],
  ['LED Lights & Bulbs', 'Bulbs, panels, tube lights, decorative'],
  ['MCB & DB', 'Circuit breakers, distribution boards'],
  ['Fans & Appliances', 'Ceiling, exhaust, table fans'],
  ['Electrical Accessories', 'Plugs, holders, tapes, connectors'],
  ['Home & Office Solutions', 'Complete wiring and lighting setups']
];

export const PR = [
  [0, 'House Wiring Copper Wire', 'Flame-retardant copper wire for safe home and shop wiring. Available in many sizes and colours.', ['Pure copper conductor', 'Flame retardant PVC', 'Red, yellow, blue, black, green'], 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80'],
  [0, 'Flexible Multi-Core Cable', 'Soft, bendable cable for appliances, pumps and extension wiring.', ['Easy to bend and route', 'Multi-strand copper', 'Suitable for appliances'], 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'],
  [0, 'Coaxial and Network Cable', 'Cables for TV, CCTV and internet connections at home or office.', ['Clear signal', 'Good shielding', 'Different lengths'], 'https://images.unsplash.com/photo-1544716278-e53995f32eb0?w=600&auto=format&fit=crop&q=80'],
  [1, 'Modular Switch Set', 'Smooth, modern switches in a range of plate designs for living rooms and bedrooms.', ['Easy modular fitting', 'Modern finish', '1, 2, 3, 4 module plates'], 'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=600&auto=format&fit=crop&q=80'],
  [1, '6A/16A Power Socket', 'Strong sockets for fans, TVs, geysers and heavy appliances.', ['Shuttered safety', 'Heat resistant body', 'Multi-pin support'], 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600&auto=format&fit=crop&q=80'],
  [1, 'Bell Push and Dimmer', 'Add comfort with fan regulators, dimmers and door bell switches.', ['Smooth regulation', 'Quiet operation', 'Fits standard boxes'], 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'],
  [2, 'LED Bulb', 'Energy saving LED bulbs in warm and cool white for every room.', ['Low power use', 'Long life', 'B22 and E27 base'], 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=600&auto=format&fit=crop&q=80'],
  [2, 'LED Panel Light', 'Slim ceiling panels, even light for offices, shops and homes.', ['Round and square', 'Glare-free light', 'Easy false ceiling fitting'], 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&auto=format&fit=crop&q=80'],
  [2, 'Tube Light and Batten', 'Bright long-lasting batten lights for shops, garages and offices.', ['Bright output', 'Instant start', '4 ft and 2 ft'], 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&auto=format&fit=crop&q=80'],
  [3, 'MCB (Single and Double Pole)', 'Miniature circuit breakers that protect wiring from overload and short circuit.', ['6A to 63A ratings', 'Quick trip response', 'DIN rail mount'], 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop&q=80'],
  [3, 'Distribution Board (DB)', 'Neat boards that hold MCBs and keep home or shop wiring organised.', ['4, 6, 8, 12 way', 'Strong metal body', 'Easy wire access'], 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80'],
  [3, 'RCCB / Safety Cut-off', 'Shock protection device for kitchens, bathrooms and workshops.', ['Earth leakage safety', 'Fast response', 'Test button'], 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&auto=format&fit=crop&q=80'],
  [4, 'Ceiling Fan', 'Quiet, powerful ceiling fans in several sizes and finishes.', ['Silent motor', 'High air delivery', '1200 mm and 1400 mm'], 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&auto=format&fit=crop&q=80'],
  [4, 'Exhaust Fan', 'Ventilation fans for kitchens, bathrooms and shops.', ['Removes smell and heat', 'Dust-proof body', 'Different blade sizes'], 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&auto=format&fit=crop&q=80'],
  [5, 'Plugs, Holders and Connectors', 'All the small items electricians need every day.', ['3-pin plugs', 'Lamp holders', 'Terminal connectors'], 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80'],
  [6, 'Home Wiring Solution', 'Plan and supply for full home wiring: wires, switches, MCBs and lights together.', ['Complete material list', 'Quality products', 'Guidance from our team'], 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80'],
  [6, 'Office and Shop Setup', 'Lighting and power setup for offices and shops, with good light and safe wiring.', ['Panel and tube lighting', 'Safe DB setup', 'Ready-to-use plan'], 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80']
];

export const CC = ['#1A3F96', '#0B2559', '#B8860B', '#2F6BFF', '#2A4F9F', '#0F2150', '#1A3F96'];

export const GI = [
  ['Our Shop', 0, 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80', 'Modern Shop Interior'],
  ['Products', 0, 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80', 'Wires & Cables Display'],
  ['Installations', 3, 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=format&fit=crop&q=80', 'Distribution Board Setup'],
  ['Our Shop', 6, 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80', 'Noor Electric Showroom'],
  ['Products', 1, 'https://images.unsplash.com/photo-1595475207225-428b62bda831?w=600&auto=format&fit=crop&q=80', 'Modular Switches & Plates'],
  ['Installations', 2, 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&auto=format&fit=crop&q=80', 'LED False Ceiling Lighting'],
  ['Our Shop', 5, 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80', 'Electrical Materials Counter'],
  ['Products', 2, 'https://images.unsplash.com/photo-1507499739999-097706ad8914?w=600&auto=format&fit=crop&q=80', 'Energy Saving LED Bulbs'],
  ['Installations', 4, 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=600&auto=format&fit=crop&q=80', 'High Speed Ceiling Fan Fitment'],
  ['Our Shop', 1, 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600&auto=format&fit=crop&q=80', 'Heavy Power Sockets Section'],
  ['Products', 5, 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=600&auto=format&fit=crop&q=80', 'Plugs, Holders & Accessories'],
  ['Installations', 2, 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&auto=format&fit=crop&q=80', 'Commercial Batten Lights']
];

export const TEAM = [
  ['Shafi Ipli', '7698195687', '917698195687'],
  ['Salman Ipli', '8140238599', '918140238599']
];
