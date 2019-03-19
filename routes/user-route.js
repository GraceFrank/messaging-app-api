
const express = require('express');
const router = express.Router();
const User = require('../models/user')


router.post('/api/users/signup', async (req, res)=>{
  const user = await User.find({
    email: req.body.email
  })
})