import React from 'react';

export default function PageBanner({ title, subtitle }) {
  return (
    <div className="ban">
      <div className="w">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
