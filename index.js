const express = require("express")

require("dotenv").config()


const app = express()

const PORT = 4000 || process.env.PORT

app.get("/",(req,res)=>{
    res.send("merhaba")
})


app.get("/car",(req,res)=>{
    res.send("car merhaba")
})


app.listen(PORT,() => console.log(`server ${PORT} nunda calisdi`))