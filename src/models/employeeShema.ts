//const mongoose = require('mongoose');
//const mongoose1 = require('mongoose');
import mongoose from 'mongoose';
const Shema = mongoose.Schema;

const EmployeeShema = new Shema ({
    name: { 
        type:String,
        required: true
    },
    password: {
        type: String, Number,
        required: true
    },
    emial: {
        type: String,
        requied: true
    }
}, {timestamps: true});

const Employee = mongoose.model('Employee', EmployeeShema);
module.exports = Employee;