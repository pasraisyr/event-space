import React from 'react';
import { visualAssets } from '../data/landingData';

export const Gallery: React.FC = () => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--gallery-cols, 3), 1fr)',
    gap: '1.5rem',
    width: '100%'
  };

  const itemStyle: React.CSSProperties = {
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    aspectRatio: '4 / 3',
    height: 'auto',
    boxShadow: '0 4px 12px rgba(44, 24, 16, 0.08)',
    cursor: 'pointer'
  };

  const imgStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.3s ease'
  };

  return (
    <section id="galeri" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Galeri Visual</span>
          <h2>Keindahan Seni Bina & Suasana</h2>
          <p>Saksikan keistimewaan Rumah Seri Harmoni dengan seni bina warisan kayu Melayu Nusantara dan persekitaran dewan semi terbuka yang memukau.</p>
        </div>

        <div className="gallery-grid" style={gridStyle}>
          
          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[0]} 
              alt="Rumah Seri Harmoni Suasana Malam Berhias Lampu & Pelamin" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Rumah Seri Harmoni</h4>
              <p>Suasana gemilang majlis perkahwinan tradisional di waktu senja</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[1]} 
              alt="Rumah Warisan Melayu Tradisional" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Rumah Warisan Melayu</h4>
              <p>Seni ukiran tiang dan anjung kayu nusantara yang mempesonakan</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[2]} 
              alt="Dewan Semi Terbuka Berbumbung" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Dewan Semi Terbuka</h4>
              <p>Ruang majlis berbumbung luas dengan pengudaraan segar semulajadi</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[3]} 
              alt="Ruang Dalaman Kayu Jati Tradisional" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Ruang Rehat & Bersiap</h4>
              <p>Dalaman kayu jati berhawa dingin untuk keselesaan mempelai</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[4]} 
              alt="Anjung & Serambi Rumah Kayu" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Anjung & Serambi Tradisi</h4>
              <p>Sudut klasik yang indah untuk fotografi bertemakan adat Melayu</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[5]} 
              alt="Laman Hijau & Kawasan Terbuka" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Laman Hijau & Parkir</h4>
              <p>Kawasan lapang dan parking luas serta selamat untuk tetamu</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Gallery;
