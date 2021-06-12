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
})
}

await queryInterface.bulkInsert('users', usersdata,{});

// Create Tags
const tagsdata=[];
const tagsidtable=[]
for(let k=0;k<10;k++){
tagsidtable[k]=k+1;
tagsdata.push({
name : faker.lorem.words()
})
}
await queryInterface.bulkInsert('tags', tagsdata,{});


// Create Articles
const articlesdate=[];
const articlesidtable=[]
for(let j=0;j<80;j++){
articlesidtable[j]=j+1;
articlesdate.push({
  title : faker.name.title(),
  content: faker.lorem.paragraphs(),
  published: Boolean(faker.datatype.number(1)), 
  UserId:  Math.floor(Math.floor(Math.random() * (20 - 1 + 1) + 1)),
}
)
}

await queryInterface.bulkInsert('articles', articlesdate,{});


//Create comments
const commentsdata=[];
const commentsidtable=[]
for(let n=0;n<120;n++){
  commentsidtable[n]=n+1;
  commentsdata.push({
  content :faker.lorem.paragraph(),
  ArticleId :articlesidtable[Math.floor(Math.random() * (80 - 1 + 1) + 1)],
})
  }

await queryInterface.bulkInsert('comments', commentsdata,{});


// Give Tags to Articles
const articletagdata=[];
for(let m=0;m<80;m++){
  articletagdata.push({
  ArticleId : m+1,
  TagId : Math.floor(Math.random()*(10 -1 +1) +1)
})
}

  await queryInterface.bulkInsert('articletag', articletagdata, {});
  
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
