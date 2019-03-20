const express = require('express');
const app = express();
const userRoutes = require('./routes/user-route');
const group = require('./routes/group-route');
const userSignup = require('./routes/user-route');


//app use
app.use(express.json());


//push any 
app.use('/api/users', userRoutes);
app.use('/api/users/group', group);
app.use('/api/users',login);
app.use('/', userSignup);



//Create and Run the port

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
