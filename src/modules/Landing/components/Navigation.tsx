import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo from '../../../assets/images/logo-en.png';
import { Button } from 'react-bootstrap';

const Navigation: React.FC = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-nav position-absolute top-0 start-0 end-0 z-1 "
    >
      <Container className="d-flex justify-content-between w-100">
        <Navbar.Brand href="#home" className="w-25">
          <img src={logo} className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#vehicles">Vehicles</Nav.Link>
            <Nav.Link href="#auctions">Auctions</Nav.Link>
            <Nav.Link href="#buyers">Buyers</Nav.Link>
            <Nav.Link href="#sellers">Sellers</Nav.Link>
            <Nav.Link href="#contactUs">Contact Us</Nav.Link>
            <Nav.Link href="#others">Others</Nav.Link>
          </Nav>
          <div className="d-flex gap-4 mt-2">
            <Button className="btn rounded-pill btn-light btn-outline-dark shadow  ps-lg-4 pe-lg-4 pt-2 pb-2">
              Sign Up
            </Button>
            <Button className="btn rounded-pill shadow bg-main ps-lg-4 pe-lg-4 pt-2 pb-2">
              Sign In
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
