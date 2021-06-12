const router = require('express' ).Router();
const usersRepo = require('../repositories/users')
const articlesRepo = require('../repositories/articles')

/* GET users listing. */
router.get('/', async function(req, res, next){
res.send(await usersRepo.getAllUsers());
});


/* GET users with pagination. */
router.get('/pagination/:offset/:limit', async function(req, res, next) {
  var off=req.params.offset;
  var lim=req.params.limit;
  res.send(await usersRepo.getUsers(1/*off*/,5/*lim*/))
  });
  
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
router.post('/' , async function(req, res, next) {
  res.send(await usersRepo.addUser(req.body))
  });

/* Update an User . */
router.put('/:id' , async function(req, res, next) {
  res.send(await usersRepo.updateUser(req.params.id,req.body))
  });

/* Delete  an User . */
router.delete('/:id', async function(req, res, next) {
  res.send(await usersRepo.deleteUser(req.params.id))
  });



/* Get Articles of an User*/
router.get('/:id/articles/',async function (req,res,next){
res.send(await articlesRepo.getArticlesofuser(req.params.id))

})


module.exports = router;