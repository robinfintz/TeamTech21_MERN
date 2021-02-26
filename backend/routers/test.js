const express = require('express');
const testController = require('../controllers/test');

let testRouter = express.Router();

testRouter.get('/student', testController.student);
testRouter.get('/admin', testController.admin);
testRouter.get('/', testController.base);

module.exports = testRouter;