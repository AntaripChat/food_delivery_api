const mongo = require('mongoose');

mongo.connect("mongodb://127.0.0.1:27017/project").then(()=>{
    console.log("Connect to the db");
}).catch((err)=>{
    console.log(err);
});