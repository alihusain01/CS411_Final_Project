import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar({ onLogout }) {
  // Use useSelector to access the user's first name from the Redux store
  const firstName = useSelector((state) => state.user.firstName);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="fs-4">
        <Navbar.Brand className="fs-3" href="/">
          The Game Index
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/weights">
              {firstName ? "Adjust Weights" : ""}
            </Nav.Link>
            {firstName ? (
              <>
                <Link to="/favoritedGames" className="nav-link">
                  Favorited Games
                </Link>
                <Nav.Link>{firstName}</Nav.Link>
                <Nav.Link onClick={onLogout}>Log Out</Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
