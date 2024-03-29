//require express

const router = require('express').Router();

//user & friend parameters through user-controller

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('..//controllers/user-controller');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

/// /api/users/:userId/friends/:friendId

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;