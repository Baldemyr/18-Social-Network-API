const router = require('express').Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller');

// to api-thoughts

router.route('/')
  .get(getAllThought)
  .post(addThought);

// to api-thought ID

router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// -to api thoughts through ID to reaction

router.route('/:thoughtId/reactions')
  .post(addReaction);   

// connects thought ID and reaction ID

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;