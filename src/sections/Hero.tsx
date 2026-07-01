import React from 'react';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';
import { visualAssets } from '../data/landingData';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${visualAssets.hero})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content-full">
          <div className="hero-rating">
            <div className="stars">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <span className="rating-text">4.9/5 Rating Acara (250+ Tempahan)</span>
          </div>
          
          <h1 className="hero-title-full">
            Mencipta Memori Indah dalam Suasana <span>Eksklusif</span>
          </h1>
          <p className="hero-description-full">
            Ubah impian perkahwinan, nikah, bertunang atau hari lahir anda menjadi realiti di Villa Astana — sebuah banglo acara premium berserta halaman hijau luas dan kolam renang persendirian.
          </p>
          
          <div className="hero-actions-full">
            <a href="#kalkulator" className="btn btn-accent">
              Kira Anggaran Harga <ArrowRight size={18} />
            </a>
            <a href="#galeri" className="btn btn-secondary" style={{ color: '#fff', borderColor: '#fff' }}>
              Lihat Galeri
            </a>
          </div>

          <div className="hero-badge-full">
            <ShieldCheck size={18} />
            <span>100% Privasi Terjamin - Hanya satu acara dalam satu hari</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
