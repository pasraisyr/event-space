import React from 'react';
import { visualAssets } from '../data/landingData';

export const Gallery: React.FC = () => {
  const photos = [
    {
      src: visualAssets.gallery[0],
      alt: "Rumah Seri Harmoni Suasana Malam Berhias Lampu & Pelamin",
      title: "Rumah Seri Harmoni",
      desc: "Suasana gemilang majlis perkahwinan tradisional di waktu senja"
    },
    {
      src: visualAssets.gallery[1],
      alt: "Rumah Warisan Melayu Tradisional",
      title: "Rumah Warisan Melayu",
      desc: "Seni ukiran tiang dan anjung kayu nusantara yang mempesonakan"
    },
    {
      src: visualAssets.gallery[2],
      alt: "Dewan Semi Terbuka Berbumbung",
      title: "Dewan Semi Terbuka",
      desc: "Ruang majlis berbumbung luas dengan pengudaraan segar semulajadi"
    },
    {
      src: visualAssets.gallery[3],
      alt: "Ruang Dalaman Kayu Jati Tradisional",
      title: "Ruang Rehat & Bersiap",
      desc: "Dalaman kayu jati berhawa dingin untuk keselesaan mempelai"
    },
    {
      src: visualAssets.gallery[4],
      alt: "Anjung & Serambi Rumah Kayu",
      title: "Anjung & Serambi Tradisi",
      desc: "Sudut klasik yang indah untuk fotografi bertemakan adat Melayu"
    },
    {
      src: visualAssets.gallery[5],
      alt: "Laman Hijau & Kawasan Terbuka",
      title: "Laman Hijau & Parkir",
      desc: "Kawasan lapang dan parking luas serta selamat untuk tetamu"
    }
  ];

  return (
    <section id="galeri" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Galeri Visual</span>
          <h2>Keindahan Seni Bina & Suasana</h2>
          <p>
            Saksikan keistimewaan Rumah Seri Harmoni dengan seni bina warisan kayu Melayu Nusantara dan persekitaran dewan semi terbuka yang memukau.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((photo, idx) => (
            <div className="gallery-item" key={idx}>
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="gallery-img" 
                loading="lazy"
              />
              <div className="gallery-overlay">
                <h4>{photo.title}</h4>
                <p>{photo.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
