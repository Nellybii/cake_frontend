import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComp() {
  return (
    <Navbar  className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Sweet Cakes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#cake">Cake</Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>

            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
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
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#order">Order</Nav.Link>
            <Nav.Link href="#contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
