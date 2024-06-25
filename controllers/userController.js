const DB = require("mongoose")
const User = require("../models/userModel")

const users = async (req,res) => {
    try {
        const users = await User.find({}, '-password'); // '-password' ile parola bilgisini hariç tutar
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

const userUpdate = async(req,res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, { username, email }, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
      }
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

const user = async(req,res) => {
    const userId = req.params.id;

    try {
      const user = await User.findById(userId, '-password');
      if (!user) {
        return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

module.exports = { user , users , userUpdate }