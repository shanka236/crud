
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dellhp', 'root', '',
 {
    host: 'localhost',
    dialect:'mysql' /*  'mysql'  */
  });

  async function test()
  {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  test()

module.exports = sequelize;
















// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('dellhp', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });

//  async function test(){

//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
//   }

//   test()

//   module.exports=sequelize