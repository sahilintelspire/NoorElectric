import React from 'react';
import { wl } from '../data/electricData';

export default function CtaSection() {
  return (
    <div className="cta rv in">
      <h2>Need electrical items? Talk to us today</h2>
      <a className="btn n" href={wl('Hello Shafi')} target="_blank" rel="noopener noreferrer">
        WhatsApp Shafi
      </a>
      <a className="btn n" href="https://wa.me/918140238599" target="_blank" rel="noopener noreferrer">
        WhatsApp Salman
      </a>
    </div>
  );
}
