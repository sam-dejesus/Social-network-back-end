const User = require('../models/User');

const UserController ={
     // Get all users
  getAllUsers(req, res) {
    User.find({})
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // Get one user by ID
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },
  
  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then(userData => res.json(userData))
      .catch(err => res.status(500).json(err));
  },

  // Update user by ID
  updateUserById(req, res) {
    User.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then(userData => {
        if (!userData) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(userData);
      })
      .catch(err => res.status(500).json(err));
  },

  // Delete user
  async deleteUserById(req, res) {
    try {
      const user = await User.findByIdAndDelete({_id:req.params.userId});
      res.status(200).json(user);
  } catch (err) {
      res.status(500).json(err);
  }
  },
}

module.exports = UserController