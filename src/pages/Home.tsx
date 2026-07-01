import React from 'react';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
// import Amenities from '../sections/Amenities';
import EventTypes from '../sections/EventTypes';
import Gallery from '../sections/Gallery';
import Calculator from '../sections/Calculator';
// import Testimonials from '../sections/Testimonials';
// import FAQ from '../sections/FAQ';
import Footer from '../sections/Footer';
import '../App.css';

export const Home: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Stats />
      {/* <Amenities /> */}
      <EventTypes />
      <Gallery />
      <Calculator />
      {/* <Testimonials />
      <FAQ /> */}
      <Footer />
    </div>
  );
};

export default Home;
