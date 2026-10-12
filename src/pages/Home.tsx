import React from 'react';
import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import Amenities from '../sections/Amenities';
import EventTypes from '../sections/EventTypes';
import Gallery from '../sections/Gallery';
import Form from '../sections/Form';
// import Footer from '../sections/Footer';
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
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
