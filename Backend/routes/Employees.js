const router = require('express').Router();
let Employee = require('../models/Employee.model');

//Get Function

router.route('/Employee/get').get((req, res) => {
    Employee.find()
        .then(Employees => res.json(Employees))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/Employees/Insert').post((req, res) => {

    const StaffId = req.body.StaffId;
    const Role = req.body.Role;
    const Name = req.body.Name;
    const NIC = req.body.NIC;
    const Salary = Number(req.body.Salary);



    const newEmployee = new Employee({
        StaffId,
        Role,
        Name,
        NIC,
        Salary,

    });



    newEmployee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/Employees/getone/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/Employees/delete/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/Employees/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => {
            Employee.StaffId = req.body.StaffId;
            Employee.Role = req.body.Role;
            Employee.Name = req.body.Name;
            Employee.NIC = req.body.NIC;
            Employee.Salary = Number(req.body.Salary);

            Employee.save()
                .then(() => res.json('Employee updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;