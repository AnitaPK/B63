const express = require('express')

const router = express.Router()
const taskController = require('../controllers/taskController')



router.post('/createTask', taskController.createTask)
router.get('/getAllTasks', taskController.getAllTasks)
router.get('/getTaskByID/:ID', taskController.getTaskByID)
router.put('/updateTask/:ID', taskController.updateTask)
router.delete('/deleteTask/:ID', taskController.deleteTask)

router.get('/queryTaskTitle/', taskController.queryTaskTitle)

//find completed tasks
//find highest priority tasks
// find tasks which are completed between given dates 

// router.get('tasksOfUSer',)


module.exports = router