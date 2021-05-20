const express = require('express');
const testController = require('../controllers/test');

let testRouter = express.Router();

testRouter.get('/student', testController.student); //http://localhost:5151/api/test/student
testRouter.get('/admin', testController.admin);
testRouter.get('/', testController.base);
testRouter.get('/GetLocations', testController.getLocations);
testRouter.post('/Login', testController.login);
testRouter.get('/Maps', testController.maps);

module.exports = testRouter;