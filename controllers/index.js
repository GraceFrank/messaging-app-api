let users = require('../models/user');


exports.addFriend = (request, response, next) => {
    const id = parseInt(request.params.userId);
    const email = request.body.email;

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].friendList.push(email);
            console.log(users);
            return response.send({statusCode: 200, message: "your head dey there", email: request.body.email});
        } else {
            return response.send({statusCode: 404, message: "U're mad, user not found", email: null})
        }
    }
    
}




