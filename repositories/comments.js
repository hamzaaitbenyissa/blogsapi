var { Comment } = require('../models')

module.exports = {
	getAllComments: ()=>{
		return Comment.findAll();
},

    getComments: (offset1 = 0, limit1 = 10)=> {
    return Comment.findAll({
    limit :limit1,
    offset: offset1,
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

    updateComment: (id,newdata)=>{  
    Comment.update(newdata,{where: {id:id}})
     },

    deleteComment: (id)=>{
        Comment.destroy({where: { id: id }})
     },
    

}