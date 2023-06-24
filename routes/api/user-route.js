// Import the necessary dependencies and controllers
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById

} = require('../../controllers/userController');

// GET and POST all users
router.route('/').get(getAllUsers).post(createUser);

// GET user id, PUT update user id and DELETE user by id
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// Export the router
module.exports = router;