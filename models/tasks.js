const { default: mongoose } = require("mongoose");


const taskSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"todo"
    },
    dueDate:{
        type:String,
        required:true
    }
})

module.exports.Task = mongoose.model('Task', taskSchema)