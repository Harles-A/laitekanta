const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
//const { check, validationResult } = require('express-validator');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

db.connect((err) => {
    if (err) {
      console.log(err);
    }
    console.log("Connected to MySQL Server!");
});

app.post('/signup', (req, res) => {
    const sqlinsert = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password   
    ]    
    db.query(sqlinsert, [values], (err, data) => {
    if(err) {            
        return res.json("Error");        
    }        
    return res.json(data);    
    })
})
app.post('/login',(req, res) => {    
    const sqllogin = "SELECT * FROM login WHERE email = ? AND password = ?";    
    db.query(sqllogin, [req.body.email,req.body.password ], (err, data) => {
    if(err) {                
        return res.json("Error");            
    }           
    if(data.length > 0) {                
        return res.json("Success");            
    } else {                
        return res.json("Faile");                    
        }           

    })
})
app.listen(8081, ()=> {
    console.log("listening");
})