const db = require('../config/db');

const Order = {
  getAllOrders: (callback) => {
    const sql = 'SELECT * FROM orders';
    db.query(sql, callback);
  },

  addOrder: (order, callback) => {
    const sql = 'INSERT INTO orders (customer_id, items, total_price, status) VALUES (?, ?, ?, ?)';
    db.query(sql, [order.customer_id, order.items, order.total_price, order.status], callback);
  },

  updateOrderStatus: (id, status, callback) => {
    const sql = 'UPDATE orders SET status = ? WHERE id = ?';
    db.query(sql, [status, id], callback);
  }
};

module.exports = Order;
