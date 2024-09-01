const express = require('express');
const router = express.Router();
const beanController = require('../controllers/beanController');

router.get('/', beanController.getAllBeans);
router.post('/', beanController.addBean);
router.put('/:id', beanController.updateBeanQuantity);

module.exports = router;
