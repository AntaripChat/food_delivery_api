const express = require('express');
require('./config/db');
const people = require('./model/index');
const app = express();
const apiRouter = require('./routes');
app.use('/api',apiRouter);

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.listen(2000,async()=>{
    console.log("Running on 2000");
    let peo = await people.create({
        email:"abc@gmail.com",
        password:"abc123",
        username:"@abc"
    });

    console.log(peo);
})