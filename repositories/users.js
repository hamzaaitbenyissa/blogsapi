var { User } = require('../models')

// exportation
module.exports = {
	getAllUsers: function(){
		return User.findAll();
	},
	getUsers: function(offset=0, limit=10){
		return User.findAll({offset: offset, limit: limit});
	},
	getUserByRole: function(role){
		return User.findAll({
			where: {
				role: role
			}
		});
	},
	getAdmins: function(){
		return this.getUserByRole('admin')
	},
	getAuthors: function() {
		return this.getUserByRole('author')
	},
	getGuests: function(){
		return this.getUserByRole('guest')
	},
	getUser: function(id){
		return User.findOne({
			where: {
				id: id
			}
		})
	},
	getUserByEmail: function(email){
		return User.findOne({
			where: {
				email: email
			}
		});
	},
	addUser: async function(userDate){
		// TODO: before adding the user, check wheter an user with the same email already exists
		// if yes so refuse the request and send error message
		// otherwise add the user
		var user = await User.create(userDate)
		return user
	},
	updateUser: async function(id, userData){
		return await User.update(userData, {
			where: {
				id: id
			}
		})
	},
	deleteUser: async function(id){
		return await User.destroy({
			where: {
				id: id
			}
		})
	},

}



// const { User } = require('../models' );
// const user = require('../models/user');

// module.exports = {
//     getAllUsers: ()=>{
//     return User.findAll()
//     },

//     getUsers:(offset = 0, limit = 10)=> {
//     return User.findAll({
//     limit :limit,
//     offset: offset,
//     });
//     },

//     getAdmins: ()=>{
//     return User.findAll({
//     where : {role : "admin"}    
//     });
//      },

//     getAuthors:()=>{
//         return User.findAll({
//         where : {role : "author"}    
//         });
//          },    
    
//     getGuests: ()=>{
//         return User.findAll({
//         where : {role : "guest"}    
//         });
//          },
    
//     getUser: (id)=>{ 
//      return User.findBypk(id)  
//     },

//     getUserByEmail: (email)=> {
//      return User.findOne({
//       where : {email:email}  
//      })   
//      },

//     addUser(newuser) {
//     User.create(newuser)
//      },

//     updateUser: (id)=>{  
//     User.update({where: {id:id}})
//      },

//     deleteUser: (id)=>{
//         user.destroy({where: { id: id }})
//      },
//     // D'autres méthodes jugées utiles
//     }
