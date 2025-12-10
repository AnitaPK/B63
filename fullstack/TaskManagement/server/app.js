const express = require('express')
const cors = require('cors')
require('dotenv').config();
const taskRouter = require('./routes/taskRoute')
const userRouter = require('./routes/userRoute')
const assignRouter = require('./routes/assignTaskRoute')
const {testConnection} = require('./config/db')
testConnection();



const app = express()
const port = process.env.PORT || 7000


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/task', taskRouter)
app.use('/api/user', userRouter)
app.use('/api/assign',assignRouter )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))