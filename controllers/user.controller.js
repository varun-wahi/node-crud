const User = require('../models/user.model');


const getUsers = async (req,res) => {

        try {
          //to find all users
          const users = await User.find({});
          res.status(200).json(users)
      
        } catch (error) {
          res.status(500).json({ message: error.message })
        }
      }


module.exports = {
    getUsers,
}