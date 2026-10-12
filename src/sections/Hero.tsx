import React from 'react';
import { ArrowRight } from 'lucide-react';
import { visualAssets, venueDetails } from '../data/landingData';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${visualAssets.hero})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content-full">
          
          <div className="hero-heritage-tag">
            <span className="heritage-line"></span>
            <span className="heritage-text">{venueDetails.tema}</span>
            <span className="heritage-line"></span>
          </div>

          <div className="hero-brand-wrap">
            <span className="hero-brand-eyebrow">RUMAH</span>
            <h1 className="hero-brand-title">Seri Harmoni</h1>
          </div>

          <h2 className="hero-tagline-lead">
            {venueDetails.tagline}
          </h2>

          <p className="hero-description-full">
            Meraikan detik penyatuan dua hati dalam suasana penuh adat dan keindahan warisan seni bina tradisional Melayu. Nikmati keanggunan Dewan Semi Terbuka, sentuhan Pelamin Tradisional Melayu, dan keselesaan intim bersama sanak saudara tersayang.
          </p>
          
          <div className="hero-actions-full">
            <a href="#tempah" className="btn btn-accent">
              Semak Tarikh & Tempah <ArrowRight size={18} />
            </a>
            <a href="#fasiliti" className="btn btn-accent">
              Terokai Fasiliti Utama
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
