const mongoose=require('mongoose');

let EmployeeModel=mongoose.Schema({
    empId:{type:Number,require:true,unique:true},
    empName:{type:String,require:true}
});

module.exports=mongoose.model('emp',EmployeeModel,'emp');