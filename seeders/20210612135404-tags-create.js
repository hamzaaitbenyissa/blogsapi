const faker=require("faker")
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
// Create Tags
//Chaque article est taggé avec entre 2 et 6 tags
const tagsdata=[];
for(let k=0;k<10;k++){
tagsdata.push({
name : faker.lorem.words(),
createdAt: faker.date.between('2000-01-01', new Date),
updatedAt: new Date(),
})
}
await queryInterface.bulkInsert('tags', tagsdata,{});
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
