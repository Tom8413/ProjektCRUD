"use strict";
const employeeControllers = require('../controllers/emoloyeeControllers');
const employeeShema = require('../models/employeeShema');
const express1 = require('express');
const router = express1.Router();
router.get('/', employeeControllers.addEmployeeData);
module.exports = router;
