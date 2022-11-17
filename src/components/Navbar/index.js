import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function navbar({ players }) {
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
            World Cup Champion 2022
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="  me-auto">
              <Link className=" nav-link" to="/">
                Matches du Jour
              </Link>
              <Link className="nav-link" to="/landing">
                Classements
              </Link>

              <NavDropdown title="Joueurs" id="collasible-nav-dropdown">
                {players.map((player, index) => {
                  
                  return (
                    
                  
                    <NavDropdown.Item
                      key = {index}
                      as={Link}
                      to={player.nom}
                      className="nav-link text-black"
                    >
                      <span className="fw-bold">{index} </span>
                    - {player.nom}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default navbar;
