const express = require('express');
const app = express();











//Create and Run the port

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});