var { Tag } = require('../models')

module.exports = {
	getAllTags: ()=>{
		return Tag.findAll();
},

    getTags: (offset1 = 0, limit1 = 10)=> {
    return Tag.findAll({
    limit :limit1,
    offset: offset1,
    });
    },
        
    getTag: (id)=>{        
    return Tag.findOne({
    where: {
    id: id
    }})},

    getTagByEmail: (email)=> {
     return Tag.findOne({
      where : {email:email}  
     })   
     },

    addTag : (newTag)=> {
    Tag.create(newTag)
     },

    updateTag: (id,newdata)=>{  
    Tag.update(newdata,{where: {id:id}})
     },

    deleteTag: (id)=>{
        Tag.destroy({where: { id: id }})
     },

    //  getTagsofArticle: (id)=>{
	// 	return Tag.findAll({
    //     where :{        
    //     }
    //     });
    // },
    

}