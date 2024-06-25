const express = require('express');

const router = express.Router();

const { login , register } = require("../auth/auth") 


// const {user , users , userUpdate} = require("../controllers/userController")


// Diğer route tanımlamaları

router.post('/login', login);

router.post('/register',register);
  


module.exports = router;







