const User = require('../models/user');


const login = async (req,res) => {
  // api to allow user to login to the platform
  try{
    //confirm if the user exist in the db with the supplied email and password
    const user = await User.find({
      email: req.body.email,
      password:req.body.password
    });

    //Response if user doesn't exist
    if(!user) return res.status(400).send(`Email or password is incorrect`);

    res.send(`Successful logged in `);

    //Response if the user exist 

  } catch(error) {
    console.log(error);
  }
};

module.exports = login;