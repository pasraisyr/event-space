import React from 'react';
import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import { contactInfo, venueDetails } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <div className="footer-logo">
            <span className="logo-eyebrow" style={{ color: 'var(--accent)', letterSpacing: '0.2em', fontSize: '0.75rem', fontWeight: 600 }}>RUMAH</span>
            <h3 style={{ color: '#fff', fontSize: '1.6rem', margin: '0.1rem 0 0.3rem 0', fontFamily: 'var(--font-heading)' }}>
              Seri Harmoni
            </h3>
            <span className="footer-badge-heritage" style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {venueDetails.tema}
            </span>
          </div>
          
          <p className="mt-sm" style={{ color: '#d0ded6', lineHeight: 1.6, fontSize: '0.9rem' }}>
            {venueDetails.tagline}. Menyediakan ruang majlis beradat dengan keindahan seni bina warisan Melayu Nusantara, dewan semi terbuka yang nyaman, serta sentuhan pelamin tradisional yang menawan.
          </p>

          <div className="footer-pillars mt-sm">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.8rem' }}>
              <span className="footer-tag"><Sparkles size={12} /> Pelamin Tradisional</span>
              <span className="footer-tag">Dewan Semi Terbuka</span>
              <span className="footer-tag">100 - 250 Pax</span>
              <span className="footer-tag">Parking Luas & Selamat</span>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h4>Pautan Pintas</h4>
          <ul className="footer-link-list">
            <li><a href="#">Utama</a></li>
            <li><a href="#fasiliti">Fitur & Fasiliti</a></li>
            <li><a href="#majlis">Kesesuaian Majlis</a></li>
            <li><a href="#galeri">Galeri Visual</a></li>
            <li><a href="#tempah">Borang Tempahan</a></li>
            <li><a href="#faq">Soalan Lazim (FAQ)</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Hubungi Pengurusan</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>{contactInfo.alamat}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>{contactInfo.telefon} ({contactInfo.pegawai})</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>{contactInfo.email}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} />
              <span>Lawatan Tapak: {contactInfo.waktuLawat}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {venueDetails.nama} ({venueDetails.tema}). Hak Cipta Terpelihara.</p>
        <p style={{ opacity: 0.8 }}>{venueDetails.tagline} • Kapasiti 100 - 250 Pax</p>
      </div>
    </footer>
  );
};
export default Footer;
