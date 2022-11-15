import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from 'react-router-dom';
import logo from './logo.png'

function navbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg " variant="dark">
        <Container>
          <Navbar.Brand to="/">
          <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top "
              alt="React Bootstrap logo"
            />
             World Cup Champion 2022</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav className="  me-auto">
              <Link className=" nav-link" to="/">Matches du Jour</Link>
              <Link className="nav-link" to="/landing">Statistiques</Link>
              
              <NavDropdown title="Joueurs" id="collasible-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">Djamel Dahmani</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">
                  Bilal Bouchakouri
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Nouar Salah Eddine
                </NavDropdown.Item>
                <NavDropdown.Divider />
               
              </NavDropdown>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;
