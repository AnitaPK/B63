const express = require('express')
require('dotenv').config()

const app = express()

const port =   process.env.PORT  || 7000

app.use(express.urlencoded({extends:true}))
app.use(express.json())

app.use('/',express.static('public'))

// app.get('/',(req,res)=>{
//     console.log(req.method,"***************")
//     res.send('Hello from express..')
// })

app.post('/contactus', (req,res)=>{
    console.log(req.body,"****req.body***")
    res.send("<h1>This is Contact us page</h1>")
})

app.post('/aboutus',(req,res,next)=>{
    res.send('This is about page ')
})

app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`)
})

