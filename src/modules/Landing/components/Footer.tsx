import * as React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';

import logo from '../../../assets/images/logo-white-en.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-lg mx-3 mx-md-auto py-5">
        <Row className="gap-3 justify-content-between">
          <Col md={4}>
            <a href="#" className="text-decoration-none">
              <img src={logo} className="logo" />
            </a>
          </Col>
          <Col md={1} className="d-flex flex-column gap-3">
            <div className="fw-bold fs-6">Service</div>
            <Nav className="flex-column gap-1">
              <Nav.Link href="#vehicles" className="text-white p-0">
                Vehicles
              </Nav.Link>
              <Nav.Link href="#auctions" className="text-white p-0">
                Auctions
              </Nav.Link>
              <Nav.Link href="#buyers" className="text-white p-0">
                Buyers
              </Nav.Link>
              <Nav.Link href="#sellers" className="text-white p-0">
                Sellers
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={2} className="d-flex flex-column gap-3">
            <div className="fw-bold fs-6">Company</div>
            <Nav className="flex-column gap-1">
              <Nav.Link href="#vehicles" className="text-white p-0">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#auctions" className="text-white p-0">
                Others
              </Nav.Link>
            </Nav>
          </Col>
          <Col
            md={4}
            className="d-flex gap-3 justify-content-md-end justify-content-lg-end"
          >
            <div className="fs-6 fw-bold">Follow US</div>
            <Nav className="gap-2">
              <Nav.Link href="#" className="text-white p-0">
                <BsFacebook size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="text-white p-0">
                <BsInstagram size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="text-white p-0">
                <BsTwitter size={20} />
              </Nav.Link>
              <Nav.Link href="#" className="text-white p-0">
                <BsLinkedin size={20} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <div className="m-auto w-fit mt-5 fs-9 text-gray">
          &copy; 2024 Nejoum Aljazeera
        </div>
      </div>
    </footer>
  );
};

export default Footer;
