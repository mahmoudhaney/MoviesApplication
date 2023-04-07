// ==================== INITIALIZE EXPRESS APP ====================
const express = require("express");
const app = express();

// ====================  GLOBAL MIDDLEWARE ====================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors());

// ====================  Required Module ====================
const auth = require('./routes/Auth')
const movies = require('./routes/movies');

// ====================  RUN THE APP  ====================
app.listen(5000, "localhost", () => {
    console.log("SERVER IS RUNNING");
});


// ====================  API ROUTES [ ENDPOINTS ]  ====================
app.use("/auth", auth)
app.use("/movies", movies);