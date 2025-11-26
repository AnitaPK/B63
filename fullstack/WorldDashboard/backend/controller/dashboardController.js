const mysql = require('mysql')

const connection = require('../config/db')




async function totalPopulation(req,res){
    try {
        console.log('***************')
        queryOne = 'select SUM(Population) as tPop from country;'
        await connection.query(queryOne, (error, results)=>{
            if (error) throw error
            console.log(results[0])
            res.status(200).send(results[0])
            
            })


    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
}

function topTENPOpContries(req,res){
    try {
        q2='SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10;'
        connection.query(q2,(error,results)=>{
            if(error) throw error
            console.log(results)
            res.status(200).send({success:true, dOne:results})
        })
        
    } catch (error) {
        res.status(500).send({msg:"Server error"})
        
    }
}






// SELECT Name, Population FROM country ORDER BY Population DESC LIMIT 10;

module.exports = {
    totalPopulation,
    topTENPOpContries
}