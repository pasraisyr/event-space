import React from 'react';
import { Phone } from 'lucide-react';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Amenities from '../sections/Amenities';
import EventTypes from '../sections/EventTypes';
import Gallery from '../sections/Gallery';
import Form from '../sections/Form';
import { contactInfo } from '../data/landingData';
import '../App.css';

export const Home: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Amenities />
      <EventTypes />
      <Gallery />
      <Form />

      {/* Floating WhatsApp Quick Contact Button (Khusus Mesra Mobile) */}
      <a 
        href={`https://wa.me/${contactInfo.telefonRaw}?text=${encodeURIComponent('Salam Puan Rozita, saya ingin bertanya tentang ketersediaan slot bagi Rumah Seri Harmoni.')}`}
        className="floating-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp Puan Rozita"
      >
        <div className="floating-whatsapp-icon">
          <Phone size={22} fill="currentColor" />
        </div>
        <span className="floating-whatsapp-text">WhatsApp Puan Rozita</span>
      </a>
    </div>
  );
};

export default Home;
