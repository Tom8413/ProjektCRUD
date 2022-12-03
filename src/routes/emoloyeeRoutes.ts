import express from 'express';

import employeeControllers from'../controllers/emoloyeeControllers';
const employeeShema = require('../models/employeeShema');


let router = express.Router();

function addData() {

router.get('/', employeeControllers.add);

};


//module.exports = router;
export default addData;