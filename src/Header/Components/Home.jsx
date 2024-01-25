import React, { useState } from "react";
import CardBody from "../../Components/CardBody";
import Karousel from "../../Components/Karousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route } from "react-router-dom";
import Cart from "../../pages/Cart"; // Import the Cart component

function Home() {
  // Define state for cart
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]); // Add the product to the cart
  };

  const products = [
    {
      id: 1,
      name: "Black Forrest",
      description: "Chocolate",
      price: 3000,
      category: "Birthday",
      image:
        "https://livforcake.com/wp-content/uploads/2017/07/black-forest-cake-thumb.jpg",
    },
    {
      id: 2,
      name: "Red velvet",
      description: "Vanilla",
      price: 4000,
      category: "Wedding",
      image:
        "https://preppykitchen.com/wp-content/uploads/2022/07/Red-Velvet-Recipe-Card-1a.jpg",
    },
    {
      id: 3,
      name: "Straw-berry",
      description: "Berry flavour",
      price: 1000,
      category: "Graduation",
      image:
        "https://www.giverecipe.com/wp-content/uploads/2020/06/Chocolate-Strawberry-Cake.jpg",
    },
  ];

  return (
    <>
      <Karousel />
      <div style={{ display: "flex" }}>
        <Container>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={4} sm={6} xs={12} className="p-3">
                <CardBody product={product} addToCart={addToCart} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Routes>
        <Route exact path="/cart" element={<Cart cartItems={cart} />} />
      </Routes>
    </>
  );
}

export default Home;
