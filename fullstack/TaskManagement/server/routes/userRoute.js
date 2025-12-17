const express = require('express')
const userController = require('../controllers/userController')
const {auth, admin} = require('../middleware/auth')

const router = express.Router()



router.post('/register', userController.register)
router.post('/login', userController.login)

router.get('/getUserInfo',auth ,userController.getUserInfo)

router.put('/updateUser/:ID', auth,userController.updateUser)
router.delete('/delteUser/:ID',auth, userController.deleteUser)

router.get('/getAllUsers', auth, userController.getAllUsers)


module.exports = router


// http://localhost:5000/api/user/register 