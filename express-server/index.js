const express = require("express");
const app = express();
const PORT = 3001;

//Middleware
const bcrypt = require('bcrypt');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(morgan('combined'))

app.get("/", (req, res) => {
  res.send("Welcome to Paws");
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
