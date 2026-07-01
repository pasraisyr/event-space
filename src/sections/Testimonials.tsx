import React from 'react';
import { Star } from 'lucide-react';
import { senaraiTestimonial } from '../data/landingData';

export const Testimonials: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Ulasan Pelanggan</span>
          <h2>Apa Kata Tuan Rumah</h2>
          <p>Rata-rata pelanggan kami sangat berpuas hati dengan kebersihan, privasi, dan sokongan staf pengurusan sepanjang majlis berlangsung.</p>
        </div>

        <div className="testimonials-grid">
          {senaraiTestimonial.map(t => (
            <div className="testimonial-card" key={t.id}>
              <div>
                <div className="stars" style={{ color: '#ffc107', marginBottom: '0.75rem' }}>
                  {Array.from({ length: t.bintang }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.ulasan}"</p>
              </div>
              <div className="testimonial-user mt-md">
                <div className="avatar-placeholder">{t.singkatan}</div>
                <div className="user-info">
                  <h5>{t.nama}</h5>
                  <p>{t.majlis}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
