const { DataTypes} = require('sequelize');
const sequelize   = require('./config');

  const User = sequelize.define('User',{
     firstname:{
        type:DataTypes.STRING,
        allowNull:false,
     },
     lastname:{
        type:DataTypes.STRING
     }
  },{
    timestamps:true
  })
module.exports={getUserController,
   addUserController,
   allUserController,
   getContactController,
   getUpdateController,
   getAboutController
  }














// const { DataTypes} = require('sequelize');

// // const sequelize = require('./index');
// const sequelize = require('./index')
// // const sequelize = new sequelize('sqlite::memory:');

// const User = sequelize.define('User',
//  {
//    firstname:{
//     type:DataTypes.STRING,
//     allowNull:false,
//    },
//    lastname:{
//     type:DataTypes.STRING
//    }
// },
// {timestamps:true
// })

// module.exports=User;