import React from 'react';
import { HouseHeart, Landmark, Users, Car } from 'lucide-react';

export const Amenities: React.FC = () => {
  const fiturList = [
    {
      icon: <HouseHeart size={36} />,
      tajuk: 'Pelamin Tradisional Melayu',
      deskripsi: 'Seni ukiran pelamin warisan Melayu Nusantara klasik, dihiasi flora segar dan pencahayaan hangat menaikkan seri raja sehari.'
    },
    {
      icon: <Landmark size={36} />,
      tajuk: 'Dewan Semi Terbuka',
      deskripsi: 'Dewan berbumbung dengan bukaan sisi semulajadi yang nyaman, redup dan berangin sepanjang majlis berlangsung.'
    },
    {
      icon: <Users size={36} />,
      tajuk: 'Kapasiti 100 - 250 Pax',
      deskripsi: 'Keluasan optimum dan intim, memastikan setiap tetamu dan keluarga dapat diraikan dengan penuh keselesaan.'
    },
    {
      icon: <Car size={36} />,
      tajuk: 'Parking Luas & Selamat',
      deskripsi: 'Kawasan tempat letak kenderaan yang lapang, tersusun rapi serta selamat di perkarangan venue untuk tetamu.'
    }
  ];

  return (
    <section id="fasiliti" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Melayu • Nusantara</span>
          <h2>Fasiliti Utama</h2>
          <p>
            Rumah Seri Harmoni menyediakan kelengkapan utama bagi menyempurnakan hari bahagia anda.
          </p>
        </div>

        {/* Kotak Hijau Gelap Besar Berkembar Emas (Poster Emblem Box) */}
        <div className="poster-emblem-banner-large">
          <div className="emblem-grid">
            {fiturList.map((item, index) => (
              <React.Fragment key={index}>
                <div className="emblem-card">
                  <div className="emblem-icon-wrap">
                    {item.icon}
                  </div>
                  <h3 className="emblem-title">{item.tajuk}</h3>
                  <p className="emblem-desc">{item.deskripsi}</p>
                </div>
                {index < fiturList.length - 1 && (
                  <div className="emblem-col-divider" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Amenities;
