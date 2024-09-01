const db = require('../config/db');

const Bean = {
  getAllBeans: (callback) => {
    const sql = 'SELECT * FROM beans';
    db.query(sql, callback);
  },

  addBean: (bean, callback) => {
    const sql = 'INSERT INTO beans (name, origin, roast_level, quantity) VALUES (?, ?, ?, ?)';
    db.query(sql, [bean.name, bean.origin, bean.roast_level, bean.quantity], callback);
  },

  updateBeanQuantity: (id, quantity, callback) => {
    const sql = 'UPDATE beans SET quantity = ? WHERE id = ?';
    db.query(sql, [quantity, id], callback);
  }
};

module.exports = Bean;
