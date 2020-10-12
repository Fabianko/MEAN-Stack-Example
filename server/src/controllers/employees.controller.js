
const employeeCtrl = {};

const Employee = require('../models/Employee');
const employee = require('../models/Employee')

employeeCtrl.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees);
};
employeeCtrl.createEmployee = async (req,res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: "Employee with id "+ newEmployee._id + " created"})
};
employeeCtrl.getEmployee = async (req,res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id)
    //const employee = await Employee.findOne({'_id':req.params.id})
    res.json(employee)
};
employeeCtrl.editEmployee = async (req,res) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json(employee)

};
employeeCtrl.deleteEmployee = async(req,res) => {
    const employee = await Employee.findByIdAndDelete(req.params.id)
    res.send({message: "Employee id "+ req.params.id + " deleted"})
};


module.exports = employeeCtrl;