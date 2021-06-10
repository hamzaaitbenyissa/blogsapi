const router = require('express' ).Router();
const usersRepo = require('../repositories/users')

/* GET users listing. */
router.get('/', async function(req, res, next){
res.send(await usersRepo.getAllUsers());

// return usersRepo.getAllUsers();
});

// /* GET users with pagination. */
// // router.get('/:limit' , async function(req, res, next) {
// //   res.send(await usersRepo.getAllUsers())
// //   });
  
// /* GET user by id. */
// router.get('/:id', async function(req, res, next) {
//   res.send(await usersRepo.getUser(id))
//   });
  

// /* Add New User . */
// router.post('/users' , async function(req, res, next) {
//   res.send(await usersRepo.addUser(req.body))
//   });

// /* Update an User . */
// router.put('/users' , async function(req, res, next) {
//   res.send(await usersRepo.updateUser(req.body))
//   });

// /* Delete  an User . */
// router.delete('/users/:id', async function(req, res, next) {
//   res.send(await usersRepo.deleteUser(id))
//   });

module.exports = router;