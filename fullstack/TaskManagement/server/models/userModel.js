// id, name, email, password, contactNumber, address,

const {sequelize} = require('../config/db')
const {DataTypes} = require('sequelize')

const User = sequelize.define("User",{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(200),
        allowNull:true,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contactNumber:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    },
    role:{
        type:DataTypes.ENUM('admin','user'),
        defaultValue:'user'
    },
        updatedBy: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true
    }
},{
    timestamps:true,
    tableName:"Users"
})

module.exports = User




