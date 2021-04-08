var express = require('express');
var app=express();
var path=require('path');
var config=require('config');
var router=require('./routes/EmployeeRouter');

app.use('/api',router);

//from config
app.listen(config.get('app.port'),()=>{
    console.log('server started at '+config.get('app.port'));
});