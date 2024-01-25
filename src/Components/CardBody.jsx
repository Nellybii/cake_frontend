import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardbody() {

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
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src='src/utils/cake.avif' style={{
            width: '100%',
            height: '30vh',
            objectFit: 'contain', // Fixing syntax errors and formatting
          }}/>
                <Card.Body >
                    <Card.Title>Red Velvet Cake</Card.Title>
                    <Card.Text>
                        Red Velvet Cake
                    </Card.Text>
                    <Button variant="dark" size="sm" className=" rounded-pill " onClick={handleAddProduct}>Buy now</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cardbody

