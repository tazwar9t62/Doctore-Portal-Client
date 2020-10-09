import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavHeader = () => {
    return (
        <Navbar bg="transparent" expand="lg">
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="mr-5" href="#home">Home</Nav.Link>
      <Nav.Link className="mr-5" href="#link">About</Nav.Link>
      <Nav.Link className="mr-5" href="#link">Dental Services</Nav.Link>
      <Nav.Link className="mr-5 text-white" href="#link">Reviews</Nav.Link>
      <Nav.Link className="mr-5 text-white" href="#link">Blogs</Nav.Link>
      <Nav.Link className="mr-5 text-white" href="#link">Contact Us</Nav.Link>
     
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    );
};

export default NavHeader;