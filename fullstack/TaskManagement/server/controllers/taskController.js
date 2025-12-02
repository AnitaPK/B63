const Task = require('../models/taskModel')


async function createTask(req,res){
    console.log(req.body)
    // const {} = req.body 
    try {
        const newTask = await Task.create(req.body)
        if(newTask){
            res.status(200).send({msg:"task created successfully...", success:true})
        }else{
            res.status(400).send({msg:"Error while task creating",success:false})
        }
    } catch (error) {
        res.status(500).send({msg:"Server Error" ,success:false})
    }
}
async function getAllTasks(req,res){
    try {
        const tasks = await Task.findAll()
         res.status(200).send({taks:tasks, success:true})
    } catch (error) {
        res.status(500).send({msg:"Server Error",success:false})
    }
}
function getTaskByID(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}

function updateTask(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}
function deleteTask(req,res){
            try {
        
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
}
module.exports ={
    createTask, getAllTasks, getTaskByID, updateTask, deleteTask
}