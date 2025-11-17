const http = require('http')
const fs = require('fs')

const app = http.createServer((req,res)=>{
    res.end('Hello ... ')
})


fs.writeFileSync('harshKiFIle.txt', 'This is first line of file...')

const fileData = fs.readFileSync('harshKiFIle.txt', 'utf-8')
console.log("fileData -->>>>",fileData)


fs.appendFileSync('harshKiFIle.txt',"\n ********This is second line.....")

const dataAfterAppend = fs.readFileSync('harshKiFIle.txt', 'UTF-8')
console.log(dataAfterAppend)



try {
fs.unlinkSync('harshKiFIle.txt')
console.log('file deleted')
    
} catch (error) {
    console.log(error, "error")
}



app.listen(7000,()=>{
    console.log('server running')
})

// http://localhost:5000