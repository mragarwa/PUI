import React from 'react';
import Link from "react-router-dom";
import cozy from './images/cozy.jpg';
import bed from './images/bed.jpg';
import couch from './images/couch.jpg';
import floor2 from './images/floor2.jpg';
import round from './images/round.jpg';
import Image from 'react-bootstrap/Image';
import { Navbar, Nav, Button, Form, FormControl, NavDropdown, Card } from 'react-bootstrap';
import 'fontsource-roboto';

/*Home: for all users. Meant to show a table of all courses that the user is enrolled in.
  If a professor is logged in, they have the chance to add more courses to their home page.
*/
const Products = () => {
  return (
  <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Fluff Stuff Pillows</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<h1> All Pillows </h1>
<div class = "d-inline-flex p-2 bd-highlight">
<Card style={{ width: '18rem' }}>
  <Card.Img height={400} variant="top" src={couch} />
  <Card.Body>
    <Card.Title>Couch Pillow</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img height={400} variant="top" src={bed} />
  <Card.Body>
    <Card.Title>Bed Pillow</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img height={400} variant="top" src={round} />
  <Card.Body>
    <Card.Title>Round Pillow</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img height={400} variant="top" src={floor2} href="/"/>
  <Card.Body>
    <Card.Title>Floor Pouf Pillow</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Pick Colors and Fillings</Button>
  </Card.Body>
</Card>
</div>
  </div>)
}

export default Products