import React from 'react';
import Link from "react-router-dom";
import cozy from './images/cozy.jpg';
import Image from 'react-bootstrap/Image';
import { Navbar, Nav, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';
import 'fontsource-roboto';

/*Home: for all users. Meant to show a table of all courses that the user is enrolled in.
  If a professor is logged in, they have the chance to add more courses to their home page.
*/
const Home = () => {
  return (
  <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Fluff Stuff Pillows</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Pillows" id="basic-nav-dropdown">
            <NavDropdown.Item href="/products" color='grey'>All Pillows</NavDropdown.Item>
            <NavDropdown.Item href="/product_page">Couch Pillows</NavDropdown.Item>
            <NavDropdown.Item href="/product_page">Round Pillows</NavDropdown.Item>
            <NavDropdown.Item href="/product_page">Bed Pillows</NavDropdown.Item>
            <NavDropdown.Item href="/cart">Floor Pouf Pillows</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Explore Fillings</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Image src={cozy} alt="home" height={500}/>
  </div>)
}

export default Home