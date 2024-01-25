import React, { useState } from 'react';

function Delivery() {
  const [productName, setProductName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleDeliveryAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the order submission logic here (you can send the data to a server, etc.)
    console.log('Order submitted:', { productName, deliveryAddress });
    // You can reset the form fields if needed
    setProductName('');
    setDeliveryAddress('');
  };

  return (
    <div>
      <h2>Make Your Deliveries Here!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={handleProductNameChange} />
        </label>
        <br />
        <label>
          Delivery Address:
          <input type="text" value={deliveryAddress} onChange={handleDeliveryAddressChange} />
        </label>
        <br />
        <button type="submit">Order</button>
      </form>
    </div>
  );
}

export default Delivery;
