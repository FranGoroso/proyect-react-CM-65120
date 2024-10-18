import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#suplementos">Suplementos</Nav.Link>
            <Nav.Link href="#Indumentaria">Indumentaria</Nav.Link>
            <Nav.Link href="#Tecnologia">Tecnologia</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
