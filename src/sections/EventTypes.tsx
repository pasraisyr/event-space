import React from 'react';
import { Check } from 'lucide-react';

export const EventTypes: React.FC = () => {
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
            <div className="event-item">
              <div className="event-item-icon"><Check size={20} /></div>
              <div className="event-item-content">
                <h4>Majlis Perkahwinan & Resepsi Tradisional</h4>
                <p>Meraikan pasangan mempelai di atas Pelamin Tradisional Melayu dalam Dewan Semi Terbuka berlatarkan seni bina rumah kayu klasik.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-item-icon"><Check size={20} /></div>
              <div className="event-item-content">
                <h4>Majlis Akad Nikah & Pertunangan</h4>
                <p>Suasana anjung dan serambi rumah kayu yang tenang dan syahdu, amat sesuai untuk upacara lafaz nikah dan sarung cincin penuh tertib.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-item-icon"><Check size={20} /></div>
              <div className="event-item-content">
                <h4>Majlis Aqiqah, Berendoi & Kesyukuran</h4>
                <p>Menghimpunkan kaum keluarga meraikan cahaya mata dengan hiasan berendoi tradisional dan jamuan makan dalam suasana desa yang nyaman.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-item-icon"><Check size={20} /></div>
              <div className="event-item-content">
                <h4>Majlis Santapan Keluarga & Korporat Bertema</h4>
                <p>Makan malam bertemakan busana tradisional Melayu Nusantara dengan kemudahan dewan semi terbuka dan tempat meletak kenderaan yang luas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventTypes;
