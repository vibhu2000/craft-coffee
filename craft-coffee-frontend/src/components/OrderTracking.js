import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderTracking = ({ orderId }) => {
  const [status, setStatus] = useState('Preparing');

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`/api/orders/${orderId}/status`)
        .then(response => setStatus(response.data.status))
        .catch(error => console.error('Error fetching order status:', error));
    }, 5000);

    return () => clearInterval(interval);
  }, [orderId]);

  return (
    <div className="order-tracking">
      <h2>Order Status</h2>
      <p>{status}</p>
    </div>
  );
};

export default OrderTracking;
