import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { contactInfo } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <h3>VILLA ASTANA</h3>
          <p>
            Membawakan suasana eksklusif rumah banglo peribadi bertaraf resort bagi melakar sejarah manis acara keluarga dan korporat anda. Privasi anda, keutamaan kami.
          </p>
          <div className="footer-socials mt-md">
            <a href="#" aria-label="Facebook" className="footer-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram" className="footer-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Pautan Pintas</h4>
          <ul className="footer-link-list">
            <li><a href="#">Utama</a></li>
            <li><a href="#fasiliti">Fasiliti</a></li>
            <li><a href="#majlis">Jenis Majlis</a></li>
            <li><a href="#galeri">Galeri Visual</a></li>
            <li><a href="#pakej">Kalkulator & Harga</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Hubungi Kami</h4>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>{contactInfo.alamat}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>{contactInfo.telefon} (Pengurus Vila)</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>{contactInfo.email}</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} />
              <span>Sesi lawatan tapak: {contactInfo.waktuLawat}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Villa Astana Event Space. Hak Cipta Terpelihara.</p>
        <p style={{ opacity: 0.8 }}>Reka bentuk dibina berinspirasikan standard e-dagang Shopify.</p>
      </div>
    </footer>
  );
};
export default Footer;
