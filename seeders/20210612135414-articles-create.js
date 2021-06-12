const faker=require("faker")
const User=require('../repositories/users');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
const users= await User.getAllUsers();

// Create Articles
// Chaque utilisateur aura créé au moins 2 articles et au plus 10 articles
const articlesdate=[];
for(let j=0;j<users.length;j++){
var iduser = users[j].id; 
var cntr= Math.floor(Math.random() * (10 - 2)+ 2)
for(let k=0;k<cntr;k++){
articlesdate.push({
  title : faker.name.title(),
  content: faker.lorem.paragraphs(),
  published: Boolean(faker.datatype.number(1)), 
  UserId:  iduser, 
  createdAt: faker.date.between(users[iduser-1].createdAt, new Date()),
  updatedAt: new Date(),
})}}

await queryInterface.bulkInsert('articles', articlesdate,{});

},
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
