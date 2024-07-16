import * as React from 'react';
import { Car } from '../api/types';
import { Button, Col } from 'react-bootstrap';
import CountDownTimer from './CountDownTimer';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const time = new Date();
  time.setHours(time.getHours() + 48);
  return (
    <Col className="bg-white shadow m-auto p-2 col-11 col-md rounded-5 d-flex flex-column gap-3 card-size">
      <div className="position-relative">
        <img
          src={car?.img}
          className="img-fluid rounded-5 w-100 car-img object-fit-cover"
        />
        <div className="bg-dark d-flex ms-1 align-items-center justify-content-between gap-2 text-white px-2 w-fit rounded-3 position-absolute bottom-0 start-0 mb-3 py-1">
          <CountDownTimer expiryTimestamp={time} />
          <div className="mb-1">
            <span className="text-gray fs-8">Bid</span>
            <span className="fs-9"> {car.bid}</span>
          </div>
        </div>
      </div>

      <div className="overflow-y-hidden p-2">
        <h6 className="fw-bold fs-6">{car?.title}</h6>
        <p className=" fs-8">{car?.description}</p>
        <div className="d-flex gap-3">
          <Button className="btn rounded-pill bg-main">Pre-Bid</Button>
          <Button className="btn rounded-pill border border-light btn-dark">
            Details
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default CarCard;
