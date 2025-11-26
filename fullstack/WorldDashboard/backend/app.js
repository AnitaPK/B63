const express = require('express')
require('dotenv').config()
const cors = require('cors')
const dashboardRouter = require('./routes/dashboardRoute')
const connection =require('./config/db')


const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/', dashboardRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))




// http://localhost:7001/totalPopulation 