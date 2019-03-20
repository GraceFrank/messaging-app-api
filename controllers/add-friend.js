//Importing user model
let Users = require("../models/user");

//Controller to handle adding a friend to your friend list
exports.addFriend = (req, res) => {
  const id = req.params.userId;
  const email = req.body.email;

  //Get user by ID
  Users.findOne({ _id: id }, (err, user) => {
    if (err) {
      res.send(err);
    }

    //Check if friend is already in the friend list
    for (let i = 0; i < user.friendList.length; i++) {
      if (user.friendList[i] === email) {
        return res.status(404).send("Already in your friend list");
      }
    }

    updateFriendList(res, id, email);
  });
};

//Add friend 
let updateFriendList = (res, id, email) => {
  Users.findByIdAndUpdate(
    id,
    { $push: { friendList: email } },
    { new: true, upsert: true },
    (err, user) => {
      if (err) {
        res.status(404).send("Could update friend list");
      }
      res.status(200).send(user);
    }
  );
};
