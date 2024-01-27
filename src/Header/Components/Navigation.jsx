import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
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
            <Nav.Link href="/user-profile">
              <FaUser />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home filteredProducts={filteredProducts} />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/user-profile" element={<Userprofile />} />
        <Route exact path="/profile" element={<UserProfileForm />} />
      </Routes>
    </>
  );
}

export default Navigation;
