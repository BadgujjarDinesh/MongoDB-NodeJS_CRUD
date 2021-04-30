var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
 
var techinfo = mongodb.MongoClient();

router.post('/', (req, res)=>{

    var e_id = req.body.e_id;
    var e_name = req.body.e_name;
    var e_salary = req.body.e_salary;


    var obj1 = {"e_id":e_id};
    var obj2 = {$set :{"e_name":e_name, "e_salary": e_salary}};


techinfo.connect('mongodb://localhost:27017/mydb',
(err, db)=>{
    db.collection('employees').updateOne(obj1,obj2,
    (err, result)=>{
        if(err){
            res.send({"update":"fail"});
        }
        else{
            res.send({"update":"successful"});
        }
    })

});


});

module.exports= router;