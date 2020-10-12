
const employeeCtrl = {};

const Employee = require('../models/Employee');

employeeCtrl.getEmployees = async (req,res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req,res, next) => {
    const newEmployee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
      });
    await newEmployee.save();
    res.send({message: "Employee with id "+ newEmployee._id + " created"});
};
employeeCtrl.getEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    //const employee = await Employee.findOne({'_id':req.params.id})
    res.json(employee);
};

employeeCtrl.editEmployee = async (req,res, next) => {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json(employee);

};

employeeCtrl.deleteEmployee = async(req,res) => {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.send({message: "Employee id "+ req.params.id + " deleted"});
};


module.exports = employeeCtrl;