import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardbody({product}) {

    const [cartItems, setCartItems] = useState([]);

    const handleAddProduct = (product) => {
        const productExists = cartItems.find((item) => item.id === product.id);
    
        if (productExists) {
          setCartItems(cartItems.map((item) =>
            item.id === product.id ?
              { ...item, quantity: item.quantity + 1 } : item
          ))
          console.log("submitted")
          ;
        } else {
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
      }

    return (
      <Col >
        <Card style={{
          width: "20rem",
          height: "30rem",
          marginTop: "20px",
          marginLeft: "10px",
        }}>
          <Card.Img
            variant="top"
            src={product.image}
            style={{ height: "250px", objectFit: "cover" }}
          />
          <Card.Body >
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

export default Cardbody

