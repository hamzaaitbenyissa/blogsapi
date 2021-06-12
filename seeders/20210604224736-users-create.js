const faker=require("faker")
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // const data=[];
    // const roles=["admin","guest","author"];
    // for(let i=0;i<20;i++){
    // data.push({
    //   username: faker.name.findName(),
    //   email : faker.internet.email(),
    //   password: faker.internet.password(),
    //   role : roles[Math.floor(Math.random() * (3)) + 0],     
		// 	createdAt: new Date(),
		// 	updatedAt: new Date()
    // })
    // }
    
    // await queryInterface.bulkInsert('Users', data, {});
    
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
