const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/users')

mongoose.connect("mongodb://localhost:27017/KriteTaskM")
.then(()=>{console.log('database connected')})
.catch((err)=>{console.log(err.message)})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", userRoute)


app.listen(3000,()=>{
    console.log('listening on port 3000')
})