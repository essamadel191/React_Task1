import React from 'react'
import navstyle from './Navbar_comp.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar_comp = () => {
  return (
    <Navbar sticky="top" expand="lg" bg="dark" data-bs-theme="dark" className={`bg-body-tertiary p-4 ${navstyle.navbar_main}`}>
      <Container>
        <Navbar.Brand href="#home" className='fs-2 text-uppercase fw-bolder'>Start Framework</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ms-auto p-2  ${navstyle.Nlinks}`}>
            <Nav.Link href="#home">ABOUT</Nav.Link>
            <Nav.Link href="#link">PORTFOLIO</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbar_comp