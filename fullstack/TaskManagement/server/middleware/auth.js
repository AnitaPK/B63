const jwt = require('jsonwebtoken')
require("dotenv").config()

function auth(req,res,next){
    // console.log(req.headers.authorization) 

    // "Bearer dfghertyudfghrtyufghj"

    const fullToken = req.headers.authorization
    if(fullToken.startsWith('Bearer')){

    const token = fullToken.split(" ")[1]
    console.log(token,"********")
    const decoded = jwt.verify(token, process.env.SECREAT_KEY)

    req.user = decoded
    console.log(req.user,"req.user")
    return next()
    }
    return res.status(400).send({msg:"Bearer not found"})
}

function admin(req,res,next){
    if(req.user.role == 'admin'){
        next();
    }else{
    return res.status(400).send({msg:"Not authorised"})
    }
}

module.exports= {auth, admin}