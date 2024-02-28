const { Task } = require("../models/tasks")
const { Users } = require("../models/users")

module.exports.createTasks = async(req,res) =>{
    const { userid} = req.params
    const taskData = req.body
    try {
        const user = await Users.findById(userid)
        if(user){
            const newTask = await new Task({...taskData, userId:userid})
            await newTask.save()
            res.status(200).json({data:newTask})
        }else{
            res.status(401).json({data:"sign in to do this action"})
        }

    } catch (error) {
        
    }
}