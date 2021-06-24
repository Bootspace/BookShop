const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoute = require('./routes/book_route');

const port = process.env.PORT || 4400;

const app = express();

// Setting up Middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// Connecting Database
let URI = 'mongodb://localhost:folklore';

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser : true,
  useCreateIndex: true
})
.then((result) => console.log("Database connected succesfully"))
.catch((err) => console.log(err));

//Home route
app.get('/', (req, res) => {
  res.send('API connected');
});

// Implementing Book routes
app.use('/books', bookRoute);

// Connecting the server
app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});