const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");


app.use(cors());
app.use(express.json());

const users = [];


app.post("/sign-up",function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    users.push({
        email,
        password
    });
    res.json({
        message: "signed up successfully"
    })
})

app.post("/login",function(req,res){
    const email = req.body.email;
    const password = req.body.password;

    let user = users.find( user => user.email === email && user.password === password);
    if(user){
        res.json({
            message: "login successfull"
        });
    }else{
        res.json({
            message: "wrong credentials"
        })
        alert("dosen't have any account matching to your credentials");
    }
})


module.exports = app
