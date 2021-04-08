
const Employee=require('../model/EmployeeModel');
//get db connection
const db=require('../services/db');

//add employee
let addEmployee=async(id,name)=>{
    try{
        console.log(name);
    return await new Employee({empId:id,empName:name}).save();
    }
    catch(error){
        console.log('ERROR :: '+error);
    }
}

//find employee by id
let findEmployee=async(id)=>{
    try{
        return await Employee.findOne({empId:id});
    }
    catch(error){
        console.log(error);
    }
}

//get all employee
let allEmployee= async ()=>{
    try{
        return await Employee.find();
    }
    catch(error){
        console.log(error);
    }
}

//update name by id
let updateEmployee=async(id,name)=>{
    try{
        return await Employee.updateOne({empId:id},{empName:name});
    }
    catch(error){
        console.log(error);
    }
}

//delete employee by id
let deleteEmployee= async(id)=>{
    try{
        return await Employee.deleteOne({empId:id});
    }
    catch(error){
        console.log(error);
    }
}
//export methods
module.exports={addEmployee,findEmployee,allEmployee,updateEmployee,deleteEmployee}