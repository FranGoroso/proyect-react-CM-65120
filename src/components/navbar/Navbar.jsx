import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../cartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../navbar/navbar.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <Navbar className="navbar" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as= {Link} to= '/' href="#home"><img className="custom-brand" src="https://st4.depositphotos.com/3265223/24936/v/450/depositphotos_249366040-stock-illustration-fitness-gym-logo-with-strong.jpg" alt="" /></Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link as= {Link} to= '/category/suplementos' href="#suplementos">Suplementos</Nav.Link>
            <Nav.Link as= {Link} to= '/category/indumentaria' href="#Indumentaria">Indumentaria</Nav.Link>
            <Nav.Link as= {Link} to= '/category/tecnologia' href="#Tecnologia">Tecnologia</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
