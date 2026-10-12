import React from 'react';
import { Check } from 'lucide-react';

export const EventTypes: React.FC = () => {
  const events = [
    {
      title: 'Majlis Perkahwinan & Resepsi Tradisional',
      desc: 'Meraikan pasangan mempelai di atas Pelamin Tradisional Melayu dalam Dewan Semi Terbuka berlatarkan seni bina rumah kayu klasik.',
      image: '/majlis_perkahwinan.jpg',
      tag: 'Perkahwinan & Resepsi'
    },
    {
      title: 'Majlis Akad Nikah & Pertunangan',
      desc: 'Suasana anjung dan serambi rumah kayu yang tenang dan syahdu, amat sesuai untuk upacara lafaz nikah dan sarung cincin penuh tertib.',
      image: '/majlis_tunang_akad.jpg',
      tag: 'Akad Nikah & Tunang'
    },
    {
      title: 'Majlis Aqiqah, Berendoi & Kesyukuran',
      desc: 'Menghimpunkan kaum keluarga meraikan cahaya mata dengan hiasan berendoi tradisional dan jamuan makan dalam suasana desa yang nyaman.',
      image: '/aqiqah_berendoi.jpg',
      tag: 'Aqiqah & Berendoi'
    },
    {
      title: 'Majlis Santapan Keluarga & Korporat Bertema',
      desc: 'Makan malam bertemakan busana tradisional Melayu Nusantara dengan kemudahan dewan semi terbuka dan tempat meletak kenderaan yang luas.',
      image: '/koporat.jpg',
      tag: 'Santapan & Korporat'
    }
  ];

  return (
    <section id="majlis" className="section section-alt">
      <div className="container event-grid">
        <div className="event-content">
          <span className="badge badge-gold">Acara Bertaraf Warisan</span>
          <h2>Kesesuaian Majlis & Acara</h2>
          <p className="mt-sm" style={{ marginBottom: '1.5rem' }}>
            Rumah Seri Harmoni direka khusus sebagai tempat event wedding tradisional berkonsepkan Melayu • Nusantara yang menampung 100 hingga 250 orang tetamu dengan penuh privasi.
          </p>

          <div className="event-list">
            {events.map((event, idx) => (
              <div className="event-item" key={idx}>
                <div className="event-item-icon"><Check size={20} /></div>
                <div className="event-item-content">
                  <h4>{event.title}</h4>
                  <p>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Gambar Acara dari Folder Public */}
        <div className="event-showcase">
          {events.map((event, idx) => (
            <div className="event-showcase-item" key={idx}>
              <img 
                src={event.image} 
                alt={event.title} 
                className="event-showcase-img"
                loading="lazy" 
              />
              <div className="event-showcase-overlay">
                <span>{event.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
