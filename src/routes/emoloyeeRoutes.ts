import express from 'express';

import employeeControllers from'../controllers/emoloyeeControllers';
import employeeShema from '../models/employeeShema';


let router = express.Router();


router.get('/all', employeeControllers.viewAllUseer);
router.get('/users/:id', employeeControllers.getIDUser);
router.get('/r', employeeControllers.sendDataToUserToBrowser);
router.post('/r', employeeControllers.addUserToDataBase);
router.delete('/users/:id', employeeControllers.deleteUser);


export default router;