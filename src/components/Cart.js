import React, {useState} from 'react';
import Link from "react-router-dom";
import couch from './images/couch.jpg';
import Image from 'react-bootstrap/Image';
import { Navbar, Nav, Button, Form, FormControl, NavDropdown, ButtonGroup, ToggleButton } from 'react-bootstrap';
import 'fontsource-roboto';
import './style.css';

/*Home: for all users. Meant to show a table of all courses that the user is enrolled in.
  If a professor is logged in, they have the chance to add more courses to their home page.
*/
const Cart = () => {
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Memory Foam', value: '1' },
        { name: 'Hypoallergenic Poly-blend', value: '2' },
        { name: 'Duck Down', value: '3' },
      ];

    const value = 0;

      function increaseValue()
{
    value = isNaN(value) ? 0 : value;
    value = value + 1;
    document.getElementById('number').value = value;
}
function reduceValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value = value - 1;
    document.getElementById('number').value = value;
}
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

    <div class="product_block">
        <div class="product_inside">    
            <img src={couch} height={400}/>  
        </div>
    <div class="product_inside">
        <div class="pillow"><a href="./product_detail.html">Couch Pillow</a></div>
        
        <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="light"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
        <div>
        <Button variant='warning'>Add to Cart</Button>
        <form>
    <Button onclick="reduceValue()" value="-" />
   <input type="text" id="number" value="0"/>
   <input type="button" onclick="increaseValue()" value="+" />
</form>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Cart