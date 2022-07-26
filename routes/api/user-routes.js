const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/user-controller');

// api users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// api user IDs
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// api users friends by friends ID
router
  .route('/:id/friends/:friendsId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;