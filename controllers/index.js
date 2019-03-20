let users = require('../models/user');


exports.addFriend = (req, res, next) => {
    const id = parseInt(req.params.userId);
    const email = req.body.email;

    users.findOneAndUpdate(
        id,
        {$push: {"friendList": email}},
        {safe: true, upsert: true, new: true},

        function(err, model) {
            if (err) {
                console.log("Error: ", err);
                res.status(500).send(err)
            } else {
                res.status(200).send(model);
            }
        }
    )
    
}




