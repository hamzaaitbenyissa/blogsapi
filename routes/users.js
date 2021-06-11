const router = require('express' ).Router();
const usersRepo = require('../repositories/users')

/* GET users listing. */
router.get('/', async function(req, res, next){
res.send(await usersRepo.getAllUsers());
});

// /* GET users with pagination. */
// router.get('/?limit=10&offset=0', async function(req, res, next) {
//   res.send(await usersRepo.getUsers(req.params.offset,req.params.limit))
//   });
  
//Get Admins Listning
router.get('/admins', async function(req, res, next) {
  res.send(await usersRepo.getAdmins())
  });

//Get Authors Listning
router.get('/authors', async function(req, res, next) {
  res.send(await usersRepo.getAuthors())
  });

//Get Guests Listning
router.get('/guests', async function(req, res, next) {
  res.send(await usersRepo.getGuests())
  });


  
/* GET user by id. */
router.get('/:id', async function(req, res, next) {
  res.send(await usersRepo.getUser(req.params.id))
  });
  


/* Add New User . */
router.post('/users' , async function(req, res, next) {
  res.send(await usersRepo.addUser(req.body))
  });

/* Update an User . */
router.put('/users' , async function(req, res, next) {
  res.send(await usersRepo.updateUser(req.body))
  });

/* Delete  an User . */
router.delete('/users/:id', async function(req, res, next) {
  res.send(await usersRepo.deleteUser(id))
  });


module.exports = router;