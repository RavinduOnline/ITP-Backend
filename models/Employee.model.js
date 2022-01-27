const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const EmployeeSchema = new Schema({
    StaffId: { type: String, required: true },
    Role: { type: String, required: true },
    Name: { type: String, required: true },
    NIC: { type: String, required: true },
    Salary: { type: Number, required: true },



}, {
    timestamps: true,
});



const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;