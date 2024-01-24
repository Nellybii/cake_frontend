import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import About from "./About";
import Delivery from "./Delivery";
import Contact from "./Contact";

// react bootstrap navbar components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Birthdaycakes from "../../Components/Birthdaycakes";

function Navigation() {
  

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <NavDropdown title="CATEGORY" id="basic-nav-dropdown">
              <NavDropdown.Item href="/birthdaycakes">
                Birthday Cakes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Wedding Cakes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Graduation Cakes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Anniversary Cakes
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Baby Shower Cakes
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about">ABOUT</Nav.Link>
            <Nav.Link href="delivery">DELIVERY</Nav.Link>
            <Nav.Link href="contact">CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/category" element={<Category />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/delivery" element={<Delivery />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/birthdaycakes" element={<Birthdaycakes />}></Route>
      </Routes>
    </>
  );
}

export default Navigation;
