const express = require('express')
const dashboardController = require('../controller/dashboardController')

const router = express.Router()



router.get('/totalPopulation', dashboardController.totalPopulation)
router.get('/topTENPOpContries',dashboardController.topTENPOpContries )









module.exports = router