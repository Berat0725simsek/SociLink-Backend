const express = require('express');

const router = express.Router();

const { login , register , deneme } = require("../auth/auth") 


// const {user , users , userUpdate} = require("../controllers/userController")


// Diğer route tanımlamaları

router.post('/login', login);

router.post('/register',register);
router.get('/register',(req,res) => res.send("register get "));

router.post("/",deneme);



module.exports = router;