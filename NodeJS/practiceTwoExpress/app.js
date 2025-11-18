const express = require('express')
require('dotenv').config()


const app = express()

const port =   process.env.PORT  || 7000

app.get('/',(req,res)=>{
    res.send('Hello from express..')
})

app.get('/contactus', (req,res)=>{
    res.send("<h1>This is Contact us page</h1>")
})

app.post('/aboutus',(req,res,next)=>{
    res.send('This is about page ')
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})

