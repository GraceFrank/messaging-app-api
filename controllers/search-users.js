const User = require('../models/user');

const searchUser = (req, res) => {
  try{
    //Looks for the email in the Users collection
    const user = User.find({email: req.body.email});

  }
}