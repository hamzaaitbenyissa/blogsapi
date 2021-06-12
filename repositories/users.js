var { User } = require('../models')

module.exports = {
	getAllUsers: ()=>{
		return User.findAll();
},

    getUsers: (offset1 = 0, limit1 = 10)=> {
    return User.findAll({
    limit :limit1,
    offset: offset1,
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

    updateUser: (id,newdata)=>{  
    User.update(newdata,{where: {id:id}})
     },

    deleteUser: (id)=>{
        User.destroy({where: { id: id }})
     },
    

}