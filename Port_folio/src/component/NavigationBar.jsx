import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../Images/logonew1.jpg';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar=()=>{
    return(
        <>
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <a class="navbar-brand" href="#">
          <img class="my-pic" width={30} height={30} src={img} alt=""/>
          
        </a>
        <Navbar.Brand href="#home"><strong>Royal Choudhary</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#cp">Coding Profiles</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}

export default NavigationBar;