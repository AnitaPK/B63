require('dotenv').config();

const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect:'mysql',
    // pool: {
    //     max: 5,
    //     min: 0,
    //     acquire: 30000,
    //     idle: 10000
    // },
    define:{
        timestamps:true
    }

})

async function testConnection(){
    try {
        await sequelize.authenticate()
        console.log('✅ Database connection has been established successfully.');
    } catch (error) {
         console.error('❌ Unable to connect to the database:', error);
    }
}

async function syncDB({force=false, alter=false}={}){
    try {
        await sequelize.sync({force,alter})
        console.log('✅ All models were synchronized successfully.');
        
    } catch (error) {
         console.error('❌ Error syncing models:', error);
    }
}
syncDB();

module.exports = {
    sequelize, testConnection, syncDB
}