import React, { useState } from 'react';
import CustomizableOrders from '../components/CustomizableOrders';
import OrderReviewConfirmation from '../components/OrderReviewConfirmation';
import OrderTracking from '../components/OrderTracking';
import './OrderPage.css'; 

const OrderPage = () => {
  const [order, setOrder] = useState({
    size: 'Medium',
    flavors: [],
    preferences: '',
  });

  const [orderId, setOrderId] = useState(null);

  const handleConfirmOrder = () => {
    // Logic to confirm the order and get order ID
    setOrderId(123); 
  };

  return (
    <div className="order-page">
      <h1>Place Your Order</h1>
      {!orderId ? (
        <>
          <CustomizableOrders order={order} setOrder={setOrder} />
          <OrderReviewConfirmation order={order} onConfirm={handleConfirmOrder} onEdit={() => {}} />
        </>
      ) : (
        <OrderTracking orderId={orderId} />
      )}
    </div>
  );
};

export default OrderPage;
