const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function register(req,res){

    try {
        let {name,email,password,contactNumber,address} = req.body
        console.log(password,"before bcrypt")
        if(!name || !email || !password){
           return res.status(201).send({msg:"data not found", success:false})
        }
        const existingUser = await User.findOne({
            where:{email}
        })
        if(existingUser){
            return res.status(200).send({msg:"user already exists",success:false})
        }
        const salt10 = await bcrypt.genSalt(10)
        password = await bcrypt.hash(password,salt10)
        console.log(password,'hashed password')
        const newUser = await User.create({name,email,password,contactNumber,address}) 
        res.status(202).send({msg:"User created successfully", success:true})
    } catch (error) {
        res.status(500).send({mgs:'server error'})
    }
}

async function login(req,res){
    const {email,password} = req.body
    try {
        const getUser = await User.findOne({where:{email:email}})
        if(!getUser){
            res.status(201).send({msg:"Invalid email address",success:false})
        }
        const checkedPass = await bcrypt.compare(password, getUser.password)
        if(!checkedPass){
            res.status(201).send({msg:"Password incorrect",success:false})
        }
        const loggedUser ={
            id:getUser.id,
            role:getUser.role
        }
        const token = jwt.sign(loggedUser, process.env.SECREAT_KEY)
        res.status(202).send({msg:"user logged in",success:true, token:token})
        
    } catch (error) {
        res.status(500).send({mgs:'server error'})
    }
}

async function getUserInfo(req,res){
    console.log(req.user.id)
    try {
       const loggedUser = await User.findOne({
        where:{id:req.user.id},
        attributes:["id","name","email","role","contactNumber","address"]
       })
       if(!loggedUser){
        res.status(400).send({msg:"user not found",success:false})
       }
       res.status(200).send({user:loggedUser,success:true})
    } catch (error) {
        res.status(500).send({mgs:'server error'})
    }
}

async function updateUser(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({mgs:'server error'})
    }
}

async function deleteUser(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({mgs:'server error'})
    }
}

async function getAllUsers(req,res){
    try {
        const users = await User.findAll({
            attributes:["id","name"]
        })

        res.status(200).send({success:true, users:users})
    } catch (error) {
        res.status(500).send({mgs:'server error'})
    }
}

module.exports = {
    register,login,getAllUsers,getUserInfo,updateUser, deleteUser
}