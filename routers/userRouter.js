const express = require('express');

const router = express.Router();

const { login , register } = require("../auth/auth") 


// const {user , users , userUpdate} = require("../controllers/userController")


// Diğer route tanımlamaları

router.post('/login', login);

router.post('/register',register);
router.get('/register',(req,res) => res.send("register get "));



module.exports = router;