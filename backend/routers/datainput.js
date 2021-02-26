const express = require('express');
const datainputController = require('../controllers/datainput');

let datainputRouter = express.Router();
datainputRouter.get('/', datainputController.base);


module.exports = datainputRouter;