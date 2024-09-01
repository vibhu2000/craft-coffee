const Bean = require('../models/beanModel');

exports.getAllBeans = (req, res) => {
  Bean.getAllBeans((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

exports.addBean = (req, res) => {
  const newBean = req.body;
  Bean.addBean(newBean, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Bean added successfully', beanId: results.insertId });
    }
  });
};

exports.updateBeanQuantity = (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  Bean.updateBeanQuantity(id, quantity, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: 'Bean quantity updated successfully' });
    }
  });
};
