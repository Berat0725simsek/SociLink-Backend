const express = require('express');
const app = express()

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require("./routers/userRouter");

require('dotenv').config()

const PORT = 3000 || process.env.PORT

const mongoURI = process.env.MONGO_URI; // Veritabanı adını burada değiştirin

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(mongoURI)
.then(() => {
  console.log('MongoDB bağlantısı başarılı.');
})
.catch((err) => {
  console.error('MongoDB bağlantı hatası:', err);
});

app.post("/deneme",(req,res) => {
  const { username , email , password } = req.body
  console.log(req.body);
  res.send(email)

})

app.use('/user', userRouter);

app.get("/",(req,res)=>{
    res.send("merhaba")
})


app.listen(PORT,() => console.log(`server ${PORT} nunda calisdi`))

module.exports = app