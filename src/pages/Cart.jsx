import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const Cart = ({ cartItems = [], updateCartCount }) => {
  // Function to handle removing a product from the cart
  const handleRemoveProduct = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    // Update cart count and cart items after removal
    updateCartCount(updatedCart.length);
  };

  // Function to handle placing an order
  const handlePlaceOrder = () => {
    // Implement the logic for placing an order here
    console.log("Order placed!");
  };

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Row style={{ marginTop: "20px" }}>
      <Col sm={8}>
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <Stack
              key={product.id}
              style={{
                border: "1px solid #000",
                width: "800px",
                borderRadius: "8px",
              }}
            >
              <div className="p-2">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.image}
                      className="img-fluid rounded-start"
                      alt={product.name}
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">ksh {product.price}</p>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleRemoveProduct(product)}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Stack>
          ))
        ) : (
          <div>No items in the cart</div>
        )}
      </Col>
      <Col sm={4}>
        <Stack
          gap={3}
          style={{
            border: "1px solid #000",
            width: "250px",
            borderRadius: "8px",
          }}
        >
          <h5 className="p-2">CART SUMMARY</h5>
          <div className="p-2">
            <strong>Subtotal ksh {calculateTotalPrice()}</strong>
          </div>
          <Button onClick={handlePlaceOrder}>Place Order</Button>
        </Stack>
      </Col>
    </Row>
  );
};

export default Cart;
