import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCartClearance = () => {
    setCartItems([]);
  }
  const handleAddProduct = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);

    if (productExists) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ?
          { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  const handleRemoveProduct = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      if (productExists.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else {
        setCartItems(cartItems.map((item) =>
          item.id === product.id ? 
          { ...item, quantity: item.quantity - 1 } : item
        ));
      }
    }
  }

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

  return (
    <div className='cart-items'>
      <div className='cart-items-header'> Cart-items </div>
      <div className='clear-cart'>
        {cartItems.length >=1 && (
            <button className='clearance-cart' onClick={handleCartClearance}> Clear Cart </button>
        )}
      </div>
      {cartItems.length === 0 && (
        <div className='cart-items-list'> No Cart Items Added </div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className='cart-items-list'>
            {/* Replace 'Image.item' with the actual image source */}
            <img className='cart-items-image' src={item.image} alt={item.name} />
            <div className='cart-items-name'> {item.name} </div>
            <div className='cart-items-function'>
              <button className='add-button' onClick={() => handleAddProduct(item)}> + </button>
              <button className='remove-button' onClick={() => handleRemoveProduct(item)}> - </button>
            </div>
            <div className='cart-items-price'> {item.quantity} * ksh{item.price} </div>
          </div>
        ))}
      </div>
      <div className='Total-price'>
        Total Price
        <div className='cart-items-total-price'>
          ksh{totalPrice}
        </div>
      </div>
    </div>
  )
}

export default Cart;