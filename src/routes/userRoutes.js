const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


router.post('/create', UserController.createUser);
router.post('/login', UserController.login);
router.get('/get/:id', UserController.getUserById);
router.get('/getByName/:name', UserController.getUserByName);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);
router.get('/list', UserController.listUsers);

module.exports = router;