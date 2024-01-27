<<<<<<< HEAD
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "../../pages/Cart"; // Import the Cart component
import Category from "./Category";
import About from "./About";
import Delivery from "./Delivery";
import Contact from "./Contact";
=======
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
>>>>>>> ecca1e47a248570d7167c8ebb1e75f253fcd0e26
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import Cart from "../../components/Cart";
import UserProfileForm from "../../Login components/Profile";
import Userprofile from "../../Login components/Userprofile";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BASE_URL } from "../../utils/Main";

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

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Nav className="me-auto">
<<<<<<< HEAD
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
=======
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
            <Nav.Link href="/user-profile">
              <FaUser />
>>>>>>> ecca1e47a248570d7167c8ebb1e75f253fcd0e26
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
<<<<<<< HEAD
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />{" "}
        {/* Add route for Cart */}
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/delivery" element={<Delivery />} />
        <Route exact path="/contact" element={<Contact />} />
=======
        <Route exact path="/" element={<Home filteredProducts={filteredProducts} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/user-profile" element={<Userprofile />} />
        <Route exact path="/profile" element={<UserProfileForm />} />
>>>>>>> ecca1e47a248570d7167c8ebb1e75f253fcd0e26
      </Routes>
    </>
  );
}

export default Navigation;
