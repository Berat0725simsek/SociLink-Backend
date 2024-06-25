const jwt = require('jsonwebtoken');

require('dotenv').config()


const JWT_SECRET = process.env.SECRET_KEY

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Yetkilendirme başarısız. Token eksik.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Geçersiz token.' });
  }
};
