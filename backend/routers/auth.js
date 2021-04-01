const express = require('express');
const authController = require('../controllers/auth');

let authRouter = express.Router();
authRouter.post('/login', authController.base);
authRouter.post('/signup', authController.base);
authRouter.post('/signout', authController.base);


module.exports = authRouter;