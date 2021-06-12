var { Tag } = require('../models')

module.exports = {
	getAllTags: ()=>{
		return Tag.findAll();
},

    getTags: (offset = 0, limit = 10)=> {
    return Tag.findAll({
    limit :limit,
    offset: offset,
    });        
    },

    
    getTag: (id)=>{        
    return Tag.findOne({
    where: {
    id: id
    }})},

    addTag : (newTag)=> {
        Tag.create(newTag)
     },

    updateTag: (id)=>{  
        Tag.update({where: {id:id}})
     },

    deleteTag: (id)=>{
        Tag.destroy({where: { id: id }})
     },

}