import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "../../pages/Cart"; // Import the Cart component
import Category from "./Category";
import About from "./About";
import Delivery from "./Delivery";
import Contact from "./Contact";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              HOME
            </Nav.Link>
            <NavDropdown title="CATEGORY" id="basic-nav-dropdown">
              {/* Add proper links for categories */}
            </NavDropdown>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/delivery">
              DELIVERY
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              CONTACT US
            </Nav.Link>
          </Nav>
          <Link to="/cart" style={{ marginLeft: "auto" }}>
            <Button variant="dark" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              Cart
            </Button>
          </Link>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />{" "}
        {/* Add route for Cart */}
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Navigation;
