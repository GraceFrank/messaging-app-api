//Importing user model
let users = require("../models/user");


//Controller to handle add friend
exports.addFriend = (req, res) => {
  const id = parseInt(req.params.userId);
  const email = req.body.email;

  //Check if friend exist in the database
  users.find({}).exec((err, user) => {
    if (err) {
        res.status(404).send("user doesn't exist");
    }

    for (let i = 0; i < user[0].friendList.length; i++) {
        if (user[0].friendList[i] === email) {
            return res.status(400).send(`Email already in use`);
        }
    }

    //find user and update friend list
    users.findOneAndUpdate(
            id,
            { $push: { friendList: email } },
            { safe: true, upsert: true, new: true },
        
            function(err, model) {
              if (err) {
                console.log("Error: ", err);
                res.status(500).send(err);
              } else {
                res.status(200).send(model.friendList);
              }
            }
          );
    
  })  
};
