import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        <div className="stat-item">
          <h3>250+</h3>
          <p>Majlis Berlangsung</p>
        </div>
        <div className="stat-item">
          <h3>300 Pax</h3>
          <p>Kapasiti Tetamu</p>
        </div>
        <div className="stat-item">
          <h3>5 Bilik</h3>
          <p>Penginapan Mewah</p>
        </div>
        <div className="stat-item">
          <h3>99%</h3>
          <p>Maklum Balas Positif</p>
        </div>
      </div>
    </section>
  );
};
export default Stats;
