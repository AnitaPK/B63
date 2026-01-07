const AssignTask = require('../models/AssignTask')
const Task = require('../models/taskModel')
const User = require('../models/userModel')


async function assignTask(req, res) {
    try {
        const { taskId, userId } = req.body

        if (!taskId || !userId) {
            return res.status(400).send({ msg: "Missing taskId or userId", success: false })
        }

        const newAssign = await AssignTask.create({
            taskId,
            userId,
            createdBy: req.user.id
        })

        return res.status(200).send({ msg: "Task assigned successfully", success: true })
    } catch (error) {
        return res.status(500).send({ msg: "Server Error", success: false })
    }
}


// 2. Get tasks assigned to a user
async function getTasksByUser(req, res) {
    console.log(req.params)
    try {
        const {userId} = req.params
        console.log(userId)
        const assignments = await AssignTask.findAll({
            where: { userId:userId },
                  include: [
        {
          model: Task,
          as: "tasks",
          attributes: ["id", "title", "status", "priority", "startDate", "endDate"]
        }
      ]
        })
        console.log(assignments)

        res.status(200).send({ success: true, assignments })
    } catch (error) {
        res.status(500).send({ msg: "Server Error", success: false })
    }
}

async function getTasksOfUser(req,res){
const userId  = req.user.id
    console.log(userId)
    try {
        const assignedTask = await AssignTask.findAll({
            where: { userId: userId },
            include: [
                {
                    model: Task,
                    as: "task",
                    attributes: ["id", "title", "status", "priority", "startDate", "endDate"]
                },
                {
                    model: User,
                    as: 'assignedBy',
                    attributes: ['name', 'role']
                }

            ]
        })
        console.log(assignedTask)

        return res.status(200).send({ assignedTasks: assignedTask })

    } catch (error) {
        return res.status(500).send({ msg: "Internal Server Error", success: false })

    }
}


module.exports = {
    assignTask,getTasksByUser, getTasksOfUser
}