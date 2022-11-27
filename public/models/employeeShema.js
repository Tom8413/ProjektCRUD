"use strict";
//const mongoose = require('mongoose');
const mongoose1 = require('mongoose');
const Shema = mongoose1.Shema;
const EmployeeShema = new Shema({
    name: {
        type: String,
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
}, { timestamps: true });
const Employee = mongoose1.model('Employee', EmployeeShema);
module.exports = Employee;
