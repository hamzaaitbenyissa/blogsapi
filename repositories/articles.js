var { Article } = require('../models')

module.exports = {
	getAllArticles: ()=>{
		return Article.findAll();
},

    getArticles: (offset = 0, limit = 10)=> {
    return Article.findAll({
    limit :limit,
    offset: offset,
    });        
    },

    
    getArticle: (id)=>{        
    return Article.findOne({
    where: {id: id}
    })},

    addArticle : (newarticle)=> {
        Article.create(newarticle)
     },

    updateArticle: (newdata,id)=>{  
        Article.update(newdata,{where: {id:id}})
     },

    deleteArticle: (id)=>{
        Article.destroy({where: { id: id }})
     },

     getArticlesofuser: (id)=>{        
        return Article.findAll({
        where: {UserId: id}
        })},
     
    getPublishedArticles: ()=>{        
        return Article.findAll({
            where: {published: 1}}
            )},

}