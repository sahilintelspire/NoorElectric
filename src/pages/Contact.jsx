import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { PhoneIcon, InstagramIcon, CATS, wl } from '../data/electricData';
import { submitEnquiry } from '../services/api';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(CATS[0][0]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    submitEnquiry({
      name,
      phone,
      category,
      message,
    });
    const text = `Hello Noor Electric, I am ${name} (${phone}). I need: ${category}. ${message}`;
    window.open(wl(text), '_blank');
  };

  return (
    <>
      <PageBanner title="Contact Us" subtitle="We are happy to help" />

      <section className="s">
        <div className="w">
          {/* Contact Direct Cards */}
          <div className="g g3">
            <a className="ci rv in" href="tel:+917698195687">
              <div className="ic">{PhoneIcon}</div>
              <b>Shafi Ipli</b>
              <span>7698195687</span>
            </a>
            <a className="ci rv in" href="tel:+918140238599">
              <div className="ic">{PhoneIcon}</div>
              <b>Salman Ipli</b>
              <span>8140238599</span>
            </a>
            <a
              className="ci rv in"
              href="https://instagram.com/noor_electric01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ic">{InstagramIcon}</div>
              <b>Instagram</b>
              <span>@noor_electric01</span>
            </a>
          </div>

          {/* Form & Map */}
          <div className="g g2" style={{ marginTop: '36px' }}>
            <form className="ft rv in" id="fm" onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: '14px' }}>Send an enquiry</h3>
              <div className="g">
                <input
                  id="fn"
                  placeholder="Your name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  id="fp"
                  placeholder="Phone number"
                  inputMode="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <select
                  id="fc2"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {CATS.map((c, i) => (
                    <option key={i} value={c[0]}>
                      {c[0]}
                    </option>
                  ))}
                </select>
                <textarea
                  id="fx"
                  rows={4}
                  placeholder="What do you need?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btn y" type="submit">
                  Send on WhatsApp
                </button>
              </div>
            </form>

            <div className="ft rv in" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3>Visit our shop</h3>
              <p style={{ margin: '8px 0 16px' }}>📍 Miyaji Shopping, Ta. &amp; Dist. Bharuch, Tankaria – 392240</p>

              {/* Embedded Interactive Google Map */}
              <div
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid var(--line)',
                  marginBottom: '18px',
                  height: '340px',
                  position: 'relative',
                  background: 'var(--card)'
                }}
              >
                <iframe
                  title="Noor Electric Shop Location"
                  src="https://maps.google.com/maps?q=Miyaji%20Shopping,%20Tankaria,%20Bharuch&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                className="btn n"
                href="https://www.google.com/maps/search/?api=1&query=Miyaji+Shopping+Tankaria+Bharuch"
                target="_blank"
                rel="noopener noreferrer"
                style={{ alignSelf: 'flex-start' }}
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
