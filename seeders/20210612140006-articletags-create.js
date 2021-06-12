const faker=require("faker");
const Article=require("../repositories/articles");
const Tag=require("../repositories/tags");


'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  const articles= await Article.getAllArticles();
  const tags= await Tag.getAllTags();

  //Chaque article est taggé avec entre 2 et 6 tags
  // Give Tags to Articles
const articletagdata=[];
for(let m=0;m<articles.length;m++){
  var idarticle=articles[m].id
  var cntr= Math.floor(Math.random() * (6 - 2 )+2)
  for(let i=0;i<cntr;i++){
  var idtag= tags[i].id
  articletagdata.push({
  ArticleId :idarticle,
  TagId : idtag,
  createdAt	:new Date(),
  updatedAt: new Date(),
}
)
}
}

  await queryInterface.bulkInsert('articletag', articletagdata, {});
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
