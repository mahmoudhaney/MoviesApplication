const {v4} = require("uuid");
const adminAuth = require("../middleware/admin");
const router = require("express").Router();
const connection = require('../db/connection');

// GET Request - Get All Movies
router.get("/movies", function (req, res) {
    connection.query("select * from movies", (err, result, fields) => {
        res.json(result);
    });
});

// POST Request - Create/Save Movie
router.post("/movie", adminAuth, function (req, res) {
    const movieData = req.body;
    connection.query("insert into movies set ? ", 
    {name: movieData.name, description: movieData.description},
    (err, result, fields) => {
        if (err) {
            res.statusCode = 400;
            res.json({message: "Faild To Save"});
        }
        else {
            res.json({message: "Movie Created Successfully"});
        }
    });
});

// GET Request - Get a specific movie
router.get("/movie/:id", function (req, res) {
    const {id} = req.params;
    connection.query("select * from movies where ?", {id: id}, (err, result, fields) => {
        if (result[0]) {
            res.json(result[0]);
        }
        else {
            res.statusCode = 404;
            res.json({message: "Movie Not Found"})
        }
    });
});

// PUT Request - Update a specific movie
router.put("/movie/:id", adminAuth, function (req, res) {
    const {id} = req.params;
    const movieData = req.body;
    connection.query("update movies set ? where ?",
    [{name: movieData.name, description: movieData.description}, {id: id}],
    (err, result, fields) => {
        if (err){
            res.statusCode = 500;
            res.json({message: "Failed To Update"});
        }
        res.json({message: "Movie Updated Successfully"});
    });
});

// DELETE Request - Delete a specific movie
router.delete("/movie/:id", adminAuth, function (req, res) {
    const {id} = req.params;
    connection.query("delete from movies where ?", {id: id}, (err, result) => {
        if(err) {
            res.statusCode = 500;
            res.json({message: "Failed to Delete"});
        }
        res.json({message: "Movie Deleted"});
    })
});

module.exports = router;