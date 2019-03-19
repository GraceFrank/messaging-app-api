const express = require('express');
const app = express();
const userSignup = require('./routes/user-route');

//app use
app.use(express.json());
app.use('/', userSignup);

//Create and Run the port

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
