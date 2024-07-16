import * as React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import CarAuctionList from '../components/CarAuctionList';
import Footer from '../components/Footer';

const Landing: React.FC = () => {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <CarAuctionList />
      <Footer />
    </div>
  );
};

export default Landing;
