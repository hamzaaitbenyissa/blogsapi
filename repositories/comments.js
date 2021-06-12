var { Comment } = require('../models')

module.exports = {
	getAllComments: ()=>{
		return Comment.findAll();
},

    getComments: (offset = 0, limit = 10)=> {
    return Comment.findAll({
    limit :limit,
    offset: offset,
    });        
    },

    
    getComment: (id)=>{        
    return Comment.findOne({
    where: {
    id: id
    }})},

    addComment : (newComment)=> {
        Comment.create(newComment)
     },

    updateComment: (id)=>{  
        Comment.update({where: {id:id}})
     },

    deleteComment: (id)=>{
        Comment.destroy({where: { id: id }})
     },

}