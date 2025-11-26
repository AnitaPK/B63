const express = require('express')
const taskConstroller = require('../controllers/taskController')

const router = express.Router()



router.post("/createTask", taskConstroller.createTask);
router.get("/get-all-tasks", taskConstroller.getAllTasks)
// create route for get  incomplete task
router.get('/getIncompleteTasks', taskConstroller.getIncompleteTasks)

//get task by ID
router.get('/getTask/:ID', taskConstroller.getTaskByID)
//get task by title


//update task information



//update tast status
router.patch('/statusUpdate/:ID', taskConstroller.StatusUpdate)

//delete task
router.delete('/deleteTask/:ID',taskConstroller.deleteTask)

module.exports = router


