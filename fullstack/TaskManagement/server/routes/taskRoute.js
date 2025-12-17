const express = require('express')

const router = express.Router()
const taskController = require('../controllers/taskController')
const {admin, auth} = require('../middleware/auth')



router.post('/createTask',auth, taskController.createTask)
router.get('/getAllTasks',auth, taskController.getAllTasks)
router.get('/getTaskByID/:ID',auth, taskController.getTaskByID)
router.put('/updateTask/:ID',auth, admin, taskController.updateTask)
router.delete('/deleteTask/:ID',auth,admin, taskController.deleteTask)

router.get('/queryTaskTitle/',auth, taskController.queryTaskTitle)

//find completed tasks
//find highest priority tasks
// find tasks which are completed between given dates 

// router.get('tasksOfUSer',)

// router.patch('/statusUpdate/:ID', )
// router.get('/getTasksByAssignedUser',)

module.exports = router