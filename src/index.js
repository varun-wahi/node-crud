const express = require("express");
const mongoose = require("mongoose")
const User = require('../models/user.model.js');
const userRoutes = require('../routes/user.route.js')


const app = express();

//middleware
app.use(express.json());

//Route
app.use("/api/users", userRoutes)


app.get('/', (req, res) => {
  res.send("Hello from server")
})



mongoose.connect("mongodb+srv://admin:admin@backend.8k9ek.mongodb.net/Collection1?retryWrites=true&w=majority&appName=Backend")
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server started");
    })
  }).catch(() => {
    console.log("Some error occured while connecting to DB.")
  })