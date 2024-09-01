import React from 'react';

const OrderReviewConfirmation = ({ order, onConfirm, onEdit }) => {
  return (
    <div className="order-review">
      <h2>Review Your Order</h2>
      <p><strong>Size:</strong> {order.size}</p>
      <p><strong>Flavors:</strong> {order.flavors.join(', ')}</p>
      <p><strong>Preferences:</strong> {order.preferences}</p>
      <button onClick={onEdit}>Edit Order</button>
      <button onClick={onConfirm}>Confirm Order</button>
    </div>
  );
};

export default OrderReviewConfirmation;
