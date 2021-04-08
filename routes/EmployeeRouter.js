var express = require('express');
var router = express.Router();
var Employee=require('../controllers/EmployeeController');

// Home page route.
router.get('/', function (req, res) {
  res.send('<h1>Home Page</h1>');
});

//add employee
router.get('/addEmployee', function (req, res) {
  res.setHeader('Content-Type','application/json');
  res.statusCode=201;
    Employee.addEmployee(req.query.id,req.query.name).then(data=>{
        if(data)
        res.send(JSON.stringify({'status':'Employee Added'}));
        else
        res.send(JSON.stringify({"status":"Failed to add Employee"}));
    });
  });

//get employee by id
router.get('/findEmployee', function (req, res) {
  res.setHeader('Content-Type','application/json');
  Employee.findEmployee(req.query.id).then(data=>{
      if(data)
      res.send(data);
      else
      res.send(JSON.stringify({'status':'Failed to get Employee'}));
  });
});

//get employee by id
router.get('/allEmployee', function (req, res) {
  res.setHeader('Content-Type','application/json');
  Employee.allEmployee().then(data=>{
      if(data)
      res.send(JSON.stringify(data));
      else
      res.send(JSON.stringify({'status':'Failed to get Employee'}));
  });
});

//update employee name
router.get('/updateEmployee', function (req, res) {
  Employee.updateEmployee(req.query.id,req.query.name).then(data=>{
      if(data)
      res.send(JSON.stringify({'status':'Employee Updated'}));
      else
      res.send(JSON.stringify({'status':'Failed to update Employee'}));
  });
});

//delete employee 
router.get('/deleteEmployee', function (req, res) {
  Employee.deleteEmployee(req.query.id).then(data=>{
      if(data)
      res.send(JSON.stringify({'status':'Employee Deleted'}));
      else
      res.send(JSON.stringify({'status':'Failed to delete Employee'}));
  });
});

  //Handle 404
  router.get('*',function(req,res){
    res.statusCode=404;
    res.send('<h1>Page Not found</h1>');
  });

module.exports=router;