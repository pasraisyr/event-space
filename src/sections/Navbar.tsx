import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
          <span className="logo-text">VILLA <span className="logo-sub">ASTANA</span></span>
        </a>
        
        <nav>
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Utama</a></li>
            <li><a href="#fasiliti" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Fasiliti</a></li>
            <li><a href="#majlis" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Kesesuaian</a></li>
            <li><a href="#galeri" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Galeri</a></li>
            <li><a href="#pakej" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Pakej & Harga</a></li>
            <li><a href="#faq" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <a href="#kalkulator" className="btn btn-primary btn-sm">Bina Pakej</a>
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
