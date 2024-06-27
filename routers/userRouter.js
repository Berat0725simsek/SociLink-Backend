const express = require('express');

const router = express.Router();

const { login , register ,deneme  } = require("../auth/auth") 


// const {user , users , userUpdate} = require("../controllers/userController")


// Diğer route tanımlamaları

router.post('/login', login);

router.post('/register',register);

router.post('/deneme',deneme);


module.exports = router;