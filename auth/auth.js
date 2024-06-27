const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

require('dotenv').config()


const secretKey = process.env.SECRET_KEY

const login = async (req,res) => {
    const { email, password } = req.body;
    
    try {
      // Kullanıcıyı e-posta adresine göre bul
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
      }
  
    // Parolayı karşılaştır
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Hatalı parola' });
    }
  
       // JWT oluştur
       const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

const register = async (req,res) => {
    const { username, email, password } = req.body;
    console.log(username,email,password);
    try {
      // Parolayı hashle
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Yeni kullanıcı oluştur
      const newUser = new User({ username, email, password: hashedPassword });
      const savedUser = await newUser.save();
  
      res.status(200).send("basarili")
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
}

module.exports = { login , register ,deneme }



