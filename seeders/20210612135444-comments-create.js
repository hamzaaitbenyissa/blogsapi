const faker=require("faker")
const Article=require("../repositories/articles")

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
  //Get Articles from database   
 const articles= await Article.getAllArticles();

//Chaque article est commenté avec entre 0 et 10 commentaires
const commentsdata=[];
for(let n=0;n<articles.length;n++){  
var idarticle=articles[n].id;
var cntr= Math.floor(Math.random() * (10 - 0 )+0)
for(let i=0;i<cntr;i++){
  commentsdata.push({
  content :faker.lorem.paragraph(),
  ArticleId :idarticle,
  createdAt: faker.date.between(articles[idarticle-1].createdAt, new Date()),
  updatedAt: new Date(),
  
})
  }
}

await queryInterface.bulkInsert('comments', commentsdata,{});

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
