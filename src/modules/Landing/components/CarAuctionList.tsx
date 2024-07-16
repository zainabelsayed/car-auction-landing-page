import * as React from 'react';
import { carsList } from '../api/queries';
import CarCard from './CarCard';
import { Row } from 'react-bootstrap';

const CarAuctionList: React.FC = () => {
  return (
    <div className="container-lg my-5 mt-lg-0 d-flex flex-column gap-3">
      <h2>Auctions</h2>
      <Row className="gap-4">
        {carsList?.map(car => <CarCard key={car?.id} car={car} />)}
      </Row>
    </div>
  );
};

export default CarAuctionList;
