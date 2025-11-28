const express = require('express')
const dashboardController = require('../controller/dashboardController')

const router = express.Router()



router.get('/totalPopulation', dashboardController.totalPopulation)
router.get('/topTENPOpContries',dashboardController.topTENPOpContries )


router.get('/getUniqueCont',dashboardController.getUniqueCont)
router.get('/getDataByConti', dashboardController.dataOfContinent)









module.exports = router