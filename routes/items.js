const express = require('express');
const itemController = require('../controllers/item.controller');

const router = express.Router();

router.post('/create', itemController.createItem);
router.post('/update', itemController.updateItem);
router.get('/get/:id', itemController.getById);
router.get('/getAll', itemController.getAll);

module.exports = router;
