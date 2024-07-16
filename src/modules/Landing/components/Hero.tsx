import * as React from 'react';
import { Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <div className="d-flex bg-mobile w-100 container-lg justify-content-between align-items-center h-700">
      <div className=" mask d-flex justify-content-center m-auto align-content-center px-3 pe-lg-0 ps-lg-0 col-12 col-lg-6 flex-column row-gap-3 mt-5 pt-5">
        <h1 className="fs-hero">
          Find Your <br /> <span className="text-main">Perfect Match </span>
          <br /> at Auction.
        </h1>
        <h2 className="fs-subtitle">
          Unlock unbeatable deals on top-quality cars.
        </h2>
        <div className="d-flex gap-4 mt-4">
          <Button className="btn rounded-pill bg-main shadow px-sm-3  py-2">
            Become a Buyer
          </Button>
          <Button className="btn rounded-pill border border-light shadow btn-dark px-sm-4 py-2">
            Sell Your Car
          </Button>
        </div>
      </div>
      <div className="bg-hero w-50  position-absolute top-0 end-0 d-none d-lg-block " />
    </div>
  );
};

export default Hero;
