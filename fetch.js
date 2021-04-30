var express = require('express');
var mongodb = require('mongodb');
var router = express.Router();
 
var techinfo = mongodb.MongoClient();

router.get('/', (req, res)=>{

techinfo.connect('mongodb://localhost:27017/mydb',
(err, db)=>{
    db.collection('employees').find().ToArray((err, Array)=>
    {
        res.send(Array);
    
    })

});


});

module.exports= router;