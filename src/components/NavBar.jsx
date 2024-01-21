import React, { Component } from "react";
import {Navbar,Nav,NavDropdown,Form,FormControl,Container,Button,} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact"


class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand href="#">Sweet Treats</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "1px" }}
                  navbarScroll
                >
                  <Nav.Link as={Link} to={"/home"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>
                    About Us
                  </Nav.Link>
                  <NavDropdown title="Products" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={Link} to={"/allcakes"}>
                      All Cakes
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/weddingcakes"}>
                      Wedding Cakes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Baby shower cakes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Birthday Cakes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Anniversary Cakes
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Graduation Cakes
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to={"/contact"}>
                    Contact us
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/home">
             <Home/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
             <Contact/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBar;
