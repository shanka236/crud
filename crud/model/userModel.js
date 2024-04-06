const { DataTypes} = require('sequelize');
const sequelize   = require('./index');

  const User = sequelize.define('User',{
     firstname:{
        type:DataTypes.STRING,
        allowNull:false
     },
     lastname:{
        type:DataTypes.STRING
     }
  },{
    timestamps:true
  })
module.exports=User;