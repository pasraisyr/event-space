import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo-container">
          <div className="logo-content">
            <span className="logo-eyebrow">RUMAH</span>
            <span className="logo-main">Seri Harmoni</span>
            <span className="logo-sub">MELAYU • NUSANTARA</span>
          </div>
        </a>
        
        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Utama</a></li>
            <li><a href="#fasiliti" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Fasiliti</a></li>
            <li><a href="#majlis" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Kesesuaian Majlis</a></li>
            <li><a href="#galeri" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Galeri</a></li>
            <li><a href="#tempah" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Borang Tempahan</a></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="#tempah" className="btn btn-primary btn-sm">
            <Phone size={14} /> Tempah Sekarang
          </a>
        </div>

        <button 
          className="mobile-toggle" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu navigasi mudah alih"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
export default Navbar;
