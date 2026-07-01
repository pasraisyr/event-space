import React from 'react';
import { visualAssets } from '../data/landingData';

export const Gallery: React.FC = () => {
  // Inline styles to guarantee immediate application and bypass any stylesheet caching issues
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
    boxShadow: '0 4px 12px rgba(11, 79, 48, 0.06)',
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
          <span className="badge">Visual Villa</span>
          <h2>Sudut Rekaan Estetik</h2>
          <p>Terokai keindahan ruang luaran dan dalaman Villa Astana yang sedia menyerikan hari bahagia anda.</p>
        </div>

        {/* Inline styles guarantee 3 columns: 3 deret atas, 3 deret bawah */}
        <div className="gallery-grid" style={gridStyle}>
          
          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[0]} 
              alt="Villa Astana Kolam Renang Twilight" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Kolam Renang Senja</h4>
              <p>Pandangan tepi kolam dengan pencahayaan romantis</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[1]} 
              alt="Dekorasi Pelamin Perkahwinan" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Hiasan Dewan Resepsi</h4>
              <p>Persediaan pelaminan perkahwinan yang menawan</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[2]} 
              alt="Setup Meja Halaman" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Halaman Garden Party</h4>
              <p>Susun atur meja banquet di bawah rimbunan pokok</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[3]} 
              alt="Kolam Renang Siang" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Aktiviti Rekreasi Siang</h4>
              <p>Kolam renang persendirian yang menyegarkan</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[4]} 
              alt="Bilik Inap Utama" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Bilik Tidur Utama (Inap)</h4>
              <p>Kemudahan penginapan mewah untuk keluarga pengantin</p>
            </div>
          </div>

          <div className="gallery-item" style={itemStyle}>
            <img 
              src={visualAssets.gallery[5]} 
              alt="Pintu Gerbang Malam" 
              className="gallery-img" 
              style={imgStyle}
            />
            <div className="gallery-overlay">
              <h4>Lampu Hiasan Malam</h4>
              <p>Suasana gemerlapan lampu dongeng di taman</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
