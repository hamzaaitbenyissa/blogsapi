const router = require('express' ).Router();
const articlesRepo = require('../repositories/articles')

/* GET Articles listing. */
router.get('/', async function(req, res, next){
res.send(await articlesRepo.getAllArticles())
});

/* GET Published Articles. */
router.get('/published', async function(req, res, next){
  res.send(await articlesRepo.getPublishedArticles())
  });

/* GET Articles with pagination. */
router.get('/pagination/:limit/:offset', async function(req, res, next) {
  var off=parseInt(req.params.offset);
  var lim=parseInt(req.params.limit);
  res.send(await articlesRepo.getArticles(off,lim))
  });
  
/* GET Article by id. */
router.get('/:id', async function(req, res, next) {
  res.send(await articlesRepo.getArticle(req.params.id))
  });
  
// /* GET Tags of An Article. */
// router.get('/:id', async function(req, res, next) {
//   res.send(await articlesRepo.getArticle(req.params.id))
//   });
  

/* Add New Article . */
router.post('/' , async function(req, res, next) {
  res.send(await articlesRepo.addArticle(req.body))
  });

/* Update an Article . */
router.put('/:id' , async function(req, res, next) {
  res.send(await articlesRepo.updateArticle(req.body),req.params.id)
  });

/* Delete  an Article . */
router.delete('/:id', async function(req, res, next) {
  res.send(await articlesRepo.deleteUser(id))
  });



  

module.exports = router;