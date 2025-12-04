const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()



router.post('/register', userController.register)
router.post('/login', userController.login)

router.get('/getUserInfo', userController.getUserInfo)
router.put('/updateUser/:ID', userController.updateUser)
router.delete('/delteUser/:ID', userController.deleteUser)

router.get('/getAllUsers', userController.getAllUsers)


module.exports = router
