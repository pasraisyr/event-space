import React from 'react';
import { Check } from 'lucide-react';

export const EventTypes: React.FC = () => {
  return (
    <section id="majlis" className="section section-alt">
      <div className="container event-grid">
        <div className="event-content">
          <span className="badge badge-gold">Acara Anda, Gaya Anda</span>
          <h2>Jenis Majlis & Acara</h2>
          <p className="mt-sm" style={{ marginBottom: '1.5rem' }}>
            Fleksibiliti reka bentuk ruang di Villa Astana membolehkan anda merancang pelbagai jenis acara berskala kecil hingga sederhana dengan konsep tersendiri.
          </p>

          <div className="event-list">
            <div className="event-item">
              <div className="event-item-icon"><Check size={20} /></div>
              <div className="event-item-content">
                <h4>Pernikahan & Resepsi (Wedding)</h4>
                <p>Abadikan hari bersejarah anda dengan suasana romantis bertemakan taman (*garden wedding*) atau tradisional moden.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-item-icon"><Check size={20} /></div>
              <div className="event-item-content">
                <h4>Majlis Tunang & Berzanji</h4>
                <p>Suasana lebih privasi dan intim untuk perhimpunan keluarga besar bagi meraikan persetujuan dua belah pihak.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-item-icon"><Check size={20} /></div>
              <div className="event-item-content">
                <h4>Sambutan Hari Lahir & Aqiqah</h4>
                <p>Kanak-kanak dan keluarga boleh berseronok di kolam renang manakala tetamu menikmati jamuan makan di dewan berbumbung.</p>
              </div>
            </div>

            <div className="event-item">
              <div className="event-item-icon"><Check size={20} /></div>
              <div className="event-item-content">
                <h4>Acara Korporat & Teambuilding</h4>
                <p>Meningkatkan ukhuwah syarikat dengan majlis makan malam santai, perhimpunan khas, atau sesi pembinaan pasukan.</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};
export default EventTypes;
