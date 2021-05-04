const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.post('/create', productController.createProduct);
router.post('/update', productController.updateProduct);
router.get('/get/:id', productController.getById);
router.get('/getAll', productController.getAll);

module.exports = router;
