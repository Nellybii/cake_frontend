import  { useState, useEffect, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FaShoppingCart } from 'react-icons/fa';
import Cart from "../../components/Cart";
import toast from "react-hot-toast";



import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BASE_URL } from "../../utils/Main";
import { User } from "../../Login components/User";
import { Button } from "react-bootstrap";


function Navigation() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); // Initially set filteredProducts to all products
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filterProductsByCategory = (selectedCategory) => {
    if (selectedCategory === "all") {
      setFilteredProducts(products); // Show all products
    } else {
      const filtered = products.filter(
        (product) => product.category_id === selectedCategory
      );
      setFilteredProducts(filtered);
    }
    setCategory(selectedCategory);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { isAuthenticated, logout } = useContext(User);


  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="CATEGORY" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => filterProductsByCategory("all")}>
                All
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filterProductsByCategory(1)}>
                Birthday Cakes
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filterProductsByCategory(2)}>
                Wedding Cakes
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filterProductsByCategory(3)}>
                Graduation Cakes
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filterProductsByCategory(4)}>
                Anniversary Cakes
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filterProductsByCategory(5)}>
                Baby Shower Cakes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
            <Nav.Link href="/cart">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Container>
        {isAuthenticated ? (
          <NavDropdown
            title={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            }
            id="basic-nav-dropdown"
            align="end"
          >
            <NavDropdown.Item as={Link} to="/profile">
              Profile
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                logout();
                toast.success("Logged out successfully!");
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <Link to="/login">
            <Button variant="secondary">Login</Button>
          </Link>
        )}
      </Navbar>

      <Routes>
        <Route
          exact
          path="/"
          element={<Home filteredProducts={filteredProducts} />}
        />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default Navigation;
