import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardbody({ product, addToCart }) {
  return (
    <Col>
      <Card
        style={{
          width: "18rem",
          height: "30rem",
          marginTop: "20px",
          marginLeft: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>ksh {product.price}</Card.Text>
          <Button
            variant="dark"
            size="sm"
            className="rounded-pill"
            onClick={() => addToCart(product)}
            style={{ width: "100%" }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cardbody;
