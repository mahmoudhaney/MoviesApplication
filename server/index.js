const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const movies = require('./routes/movies');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("", movies);


app.listen(5000, "localhost", () => {
    console.log("SERVER IS RUNNING");
});