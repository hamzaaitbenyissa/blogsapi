const router = require('express' ).Router();
const commentsRepo = require('../repositories/comments')

/* GET Comments listing. */
router.get('/', async function(req, res, next){
res.send(await commentsRepo.getAllComments());
});

/* GET Comments with pagination. */
router.get('/pagination/:offset/:limit', async function(req, res, next) {
  var off=parseInt(req.params.offset);
  var lim=parseInt(req.params.limit);
  res.send(await commentsRepo.getComments(off,lim))
  });
  
/* GET Comment by id. */
router.get('/:id', async function(req, res, next) {
  res.send(await commentsRepo.getComment(req.params.id))
  });
  

/* Add New Comment . */
router.post('/' , async function(req, res, next) {
  res.send(await commentsRepo.addComment(req.body))
  });

/* Update an Comment . */
router.put('/:id' , async function(req, res, next) {
  res.send(await commentsRepo.updateComment(req.params.id,req.body))
  });

/* Delete  an Comment . */
router.delete('/:id', async function(req, res, next) {
  res.send(await commentsRepo.deleteComment(req.params.id))
  });


module.exports = router;