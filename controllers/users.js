const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Users } = require('../models/users')
const SECRETKEY = "JWTSECRET"

module.exports.signUp = async(req,res) =>{
    const { username , email , password } = req.body
    try {
        const userExist = await Users.findOne({ email })
        if(!userExist){
            const hashPasswd = await bcrypt.hash(password,12)
            const newUser = await new Users({username, email, password:hashPasswd,})
            const token = jwt.sign({ ...newUser, password:null }, SECRETKEY)
            await newUser.save()
            res.status(200).json({ data:{...newUser,password:null}, token})
        }else{
            res.status(403).json({data:"user already exists"})
        }
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports.login = async(req, res) => {
    const { email, password } = req.body
    try {
        const userExist = await Users.findOne({ email })
        if(userExist){
            const validPassword = await bcrypt.compare(password, userExist.password)
            if(validPassword){
                const token = jwt.sign({ ...userExist, password:null },SECRETKEY)
                res.status(200).json({ data:{...use,password:null}, token})
            }else{
                res.status(403).json({ data:"email or password incorrect"})
            }
        }else{
            res.status(403).json({ data:"email or password incorrect"})
        }
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}