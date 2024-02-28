const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },
    password:{
        type:String,
        required: true,
        trim: true,
    }
})

module.exports.Users = mongoose.model('Users', userSchema)