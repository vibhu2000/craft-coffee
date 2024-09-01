const Order = require('../models/orderModel');

exports.getAllOrders = (req, res) => {
  Order.getAllOrders((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

exports.addOrder = (req, res) => {
  const newOrder = req.body;
  Order.addOrder(newOrder, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Order placed successfully', orderId: results.insertId });
    }
  });
};

exports.updateOrderStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  Order.updateOrderStatus(id, status, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Order status updated successfully' });
    }
  });
};
