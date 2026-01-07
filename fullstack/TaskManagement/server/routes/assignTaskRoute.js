const express = require('express')
const router = express.Router()

const assignTaskController = require('../controllers/assignTasksController')
const { auth, admin } = require('../middleware/auth')


// Assign task to a user
router.post('/assignTask', auth, assignTaskController.assignTask)

// Get all tasks assigned to a particular user
router.get('/getTasksByUser/:userId', auth, assignTaskController.getTasksByUser)

//get tasks of user 
router.get('/getTasksOfUser', auth, assignTaskController.getTasksOfUser)


// Get all users assigned to a particular task
// router.get('/getUsersByAssignedTask/:taskId', auth, assignTaskController.getUsersByAssignedTask)

// Update assigned task (idleDeadline, etc.)
// router.put('/updateAssignedTask/:ID', auth, admin, assignTaskController.updateAssignedTask)

// Delete assignment
// router.delete('/deleteAssignedTask/:ID', auth, admin, assignTaskController.deleteAssignedTask)

module.exports = router
