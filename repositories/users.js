var { User } = require('../models')

module.exports = {
	getAllUsers: ()=>{
		return User.findAll();
},

    getUsers: (offset = 0, limit = 10)=> {
    return User.findAll({
    limit :limit,
    offset: offset,
    });
    },

    getAdmins: ()=>{
    return User.findAll({
    where : {role : "admin"}    
    });
     },
    
    getAuthors:()=>{
        return User.findAll({
        where : {role : "author"}    
        });
         },    
    
    getGuests: ()=>{
        return User.findAll({
        where : {role : "guest"}    
        });
         },
    
    getUser: (id)=>{        
    return User.findOne({
    where: {
    id: id
    }})},

    getUserByEmail: (email)=> {
     return User.findOne({
      where : {email:email}  
     })   
     },

    addUser : (newuser)=> {
    User.create(newuser)
     },

    updateUser: (id)=>{  
    User.update({where: {id:id}})
     },

    deleteUser: (id)=>{
        user.destroy({where: { id: id }})
     },
    // D'autres méthodes jugées utiles

}