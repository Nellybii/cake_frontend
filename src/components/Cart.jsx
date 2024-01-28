import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { BASE_URL } from "../utils/Main";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/cartItems`)
      .then((response) => response.json())
      .then((data) => {
        // Initialize quantity to 1 if it's initially undefined
        const updatedCartItems = data.map((item) => ({
          ...item,
          quantity: item.quantity || 1,
        }));
        setCartItems(updatedCartItems);
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const removeItem = (cartItemId) => {
    fetch(`${BASE_URL}/cartItems/${cartItemId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedCartItems = cartItems.filter(
            (item) => item.id !== cartItemId
          );
          setCartItems(updatedCartItems);
        }
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  const decrementCount = (cartItemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === cartItemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const incrementCount = (cartItemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === cartItemId && item.quantity < 10) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (subtotal, item) => subtotal + item.quantity * item.price,
      0
    );
  };

  return (
    <Row style={{ marginTop: "20px", marginLeft: "30px" }}>
      <Col sm={8}>
        {cartItems.map((cartItem) => (
          <Stack
            key={cartItem.id}
            style={{
              border: "1px solid #000",
              width: "800px",
              borderRadius: "8px",
              backgroundColor: "white",
            }}
          >
            <div className="p-2">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={cartItem.image}
                    className="img-fluid rounded-start"
                    alt={cartItem.name}
                    style={{ height: "150px", width: "160px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{cartItem.name}</h5>
                    <p className="card-text">
                      <strong>Ksh</strong>
                      {cartItem.price}
                    </p>
                    <div>
                      <Button
                        variant="outline-warning"
                        onClick={() => decrementCount(cartItem.id)}
                      >
                        -
                      </Button>
                      <span>{Math.max(1, cartItem.quantity)}</span>
                      <Button
                        variant="outline-success"
                        onClick={() => incrementCount(cartItem.id)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="outline-warning"
                style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  marginBottom: "10px",
                }}
                onClick={() => removeItem(cartItem.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
                <strong>Remove</strong>
              </Button>
            </div>
          </Stack>
        ))}
      </Col>
      <Col sm={4}>
        <Stack
          gap={3}
          style={{
            border: "1px solid #000",
            width: "250px",
            borderRadius: "8px",
            backgroundColor: "white",
          }}
        >
          <h5 className="p-2">CART SUMMARY</h5>
          <div className="p-2">
            <strong>Subtotal Ksh {calculateSubtotal().toFixed(2)}</strong>
          </div>
          <Button
            variant="success"
            style={{
              marginRight: "30px",
              marginLeft: "30px",
              marginBottom: "10px",
            }}
          >
            Place Order
          </Button>
        </Stack>
      </Col>
    </Row>
  );
};

export default Cart;
