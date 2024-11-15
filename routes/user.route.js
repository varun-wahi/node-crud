const express = require('express');
const { getUsers } = require('../controllers/user.controller');
const router = express.Router();


router.get('/', getUsers);


router.get('/:id', async (req, res) => {

    try {
      const { id } = req.params;
      const user =await User.findById(id);
      res.status(200).json(user);
  
    } catch (error) {
      res.status(500).json({ message: error.message })
  
    }
  
  
  });
  
  router.put('/updateUser/:id',async (req, res) => {
  
    const { id } = req.params;
  
    //mongoose command to update
    const user = await User.findByIdAndUpdate(id, req.body);
  
    if(!user){
      //If user doesn't exist already
      return res.status(404).json({message: "User not found"});
  
    }
  
    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  });
  
  router.delete('/deleteUser/:id',async (req, res) => {
  
    const { id } = req.params;
  
    //mongoose command to update
    const user = await User.findByIdAndDelete(id);
  
    if(!user){
      //If user doesn't exist already
      return res.status(404).json({message: "User not found"});
  
    }
  
    res.status(200).json({message : "User deleted successfully"});
  });
  
  router.post('/addUser', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
  
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  })




module.exports= router;