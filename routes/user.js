const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/create', userController.createProduct);
router.post('/update', userController.updateUser);
router.get('/get/:id', userController.getById);
router.get('/getAll', userController.getAll);

module.exports = router;
