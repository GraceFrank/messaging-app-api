const User = require('../models/user');

const searchUser = async(req, res) => {
  try{
    //Looks for the email in the Users collection
    const user = await User.find({email: req.body.email});
    //returns an error message if the user is not found
    if(!user) return res.send('User not found');

    //respond the user
    res.send(user);
  }catch(e){
    res.send(e);
  }
}

module.exports = searchUser;