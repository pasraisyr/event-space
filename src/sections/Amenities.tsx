import React from 'react';
import { Home, Sparkles, Users, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const Amenities: React.FC = () => {
  return (
    <section id="fasiliti" className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Kelengkapan Premium</span>
          <h2>Fasiliti Yang Mempesonakan</h2>
          <p>Setiap sudut Villa Astana direka khas untuk keselesaan tuan rumah dan juga semua tetamu yang diraikan.</p>
        </div>

        <div className="amenities-grid">
          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <Home size={24} />
            </div>
            <h3>Dewan Semi-Terbuka</h3>
            <p>Dewan utama berbumbung yang luas dengan sistem pengudaraan yang sejuk, selesa untuk susunan meja tetamu.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <Sparkles size={24} />
            </div>
            <h3>Kolam Renang Mewah</h3>
            <p>Kolam renang persendirian bersaiz besar dengan dek tepi kolam yang cantik untuk bergambar dan majlis bersantai.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <Users size={24} />
            </div>
            <h3>Bilik Bersiap Ber-AC</h3>
            <p>Dua bilik persediaan berhawa dingin sepenuhnya bagi memastikan pengantin atau keluarga berehat dan bersiap dengan selesa.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <MapPin size={24} />
            </div>
            <h3>Laman Hijau (Outdoor Lawn)</h3>
            <p>Halaman luar berumput permaidani yang luas, sangat sesuai untuk upacara perkahwinan, pelamin taman, atau khemah layangan.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <Clock size={24} />
            </div>
            <h3>Sistem Audio & Karaoke</h3>
            <p>Kelengkapan audio berkualiti tinggi berserta mikrofon tanpa wayar dan sistem karaoke untuk menceriakan lagi majlis anda.</p>
          </div>

          <div className="amenity-card">
            <div className="amenity-icon-wrapper">
              <ShieldCheck size={24} />
            </div>
            <h3>Parking Luas & Selamat</h3>
            <p>Kawasan parking khas berpagar di dalam villa untuk keluarga serta kawasan parking di tepi jalan luar yang selesa.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Amenities;
