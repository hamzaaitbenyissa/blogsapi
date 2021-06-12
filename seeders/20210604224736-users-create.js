const faker=require("faker")
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

//Create Users
const usersdata=[];
const roles=["admin","guest","author"];
const usersidtable=[]
for(let i=0;i<20;i++){
usersidtable[i]=i+1;
usersdata.push({
  username: faker.name.findName(),
  email : faker.internet.email(),
  password: faker.internet.password(),
  role :  roles[Math.floor(Math.random() * (3)) + 0],     
  createdAt: faker.date.between('2000-01-01', '2021-12-31'),
  updatedAt: new Date(),

})
}
await queryInterface.bulkInsert('users', usersdata,{});

  },



  down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
  }
};
