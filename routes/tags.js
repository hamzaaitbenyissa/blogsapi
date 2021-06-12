const router = require('express' ).Router();
const TagsRepo = require('../repositories/Tags')

/* GET Tags listing. */
router.get('/', async function(req, res, next){
res.send(await TagsRepo.getAllTags());
});

/* GET Tags with pagination. */
router.get('/pagination/:offset/:limit', async function(req, res, next) {
  var off=req.params.offset;
  var lim=req.params.limit;
  res.send(await TagsRepo.getTags(1/*off*/,5/*lim*/))
  });
  
/* GET Tag by id. */
router.get('/:id', async function(req, res, next) {
  res.send(await TagsRepo.getTag(req.params.id))
  });
  

/* Add New Tag . */
router.post('/' , async function(req, res, next) {
  res.send(await TagsRepo.addTag(req.body))
  });

/* Update an Tag . */
router.put('/:id' , async function(req, res, next) {
  res.send(await TagsRepo.updateTag(req.params.id,req.body))
  });

/* Delete an Existing Tag . */
router.delete('/:id', async function(req, res, next){
  res.send(await TagsRepo.deleteTag(req.params.id))
  });


module.exports = router;