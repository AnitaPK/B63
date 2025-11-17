const http = require('http')
const os = require('os')
const path = require('path')


const app = http.createServer((req,res)=>{
    console.log('server instance')
    res.end("This is my first server")
})


console.log(os.platform())
console.log(os.hostname(),"hostname")
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);

// console.log('CPU Info:', os.cpus());


console.log(__dirname, "server path")

const reqPath = path.join(__dirname,'downloads', 'reuirments.txt')
console.log(reqPath, "requiremts files path")
console.log(path.basename(reqPath))

app.listen(7000,()=>{
    console.log("*******server started********")
})

// http://localhost:7000/download/