// Database connexion with Mongoose
const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://admin:<password>@cluster0.mup5h.mongodb.net/test",
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
        if(!err) console.log("Mongo DB connected")
        else console.log("Connection failed:" + err)
    }
)
