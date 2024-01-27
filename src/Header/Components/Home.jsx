import React from "react";
import Cardbody from "../../Components/Cardbody";
import Karousel from "../../Components/Karousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BASE_URL } from "../../utils/Main";

function Home({ filteredProducts }) {
  const addToCart = (product) => {
    fetch(`${BASE_URL}/cartItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: product.name,
        image: product.image,
        price: product.price,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add item to cart");
        }
        return res.json();
      })
      .then(() => {
        console.log("Item added to cart successfully");
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error.message);
      });
  };

  return (
    <>
      <Karousel />
      <Container>
        <Row>
          {filteredProducts.map((product) => (
            <Col key={product.id}>
              <Cardbody product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
