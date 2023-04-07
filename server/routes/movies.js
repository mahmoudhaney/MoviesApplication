const router = require("express").Router();
const connection = require('../db/connection');
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/uploadImages');
const {body, validationResult} = require("express-validator");
const util = require("util");
const fs = require("fs");

// ==================== Admin ====================
// Create/Save Movie
router.post(
    "", 
    admin, 
    upload.single("image"),
    body("name").isString().withMessage("please enter a valid name"), 
    body("description").isString().withMessage("please enter a valid description"),
    async (req, res) => {
        try {
            // 1- Valid Request
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            // 2- Validate the image
            if(!req.file){
                return res.status(400).json({
                    errors: [{msg: "Image is Required",},],
                });
            }

            // 3- Prepare movie object
            const movie = {
                name: req.body.name,
                description: req.body.description,
                image_url: req.file.filename,
            };

            // 4- Insert movie object into Database
            const query = util.promisify(connection.query).bind(connection);
            await query("insert into movies set ? ", movie);
            res.status(200).json({msg: "Movie Created Successfully",});
        } catch (error) {
            res.status(500).json(error);
        }
});

// Update a specific movie
router.put(
    "/:id", 
    admin, 
    upload.single("image"),
    body("name").isString().withMessage("please enter a valid name"), 
    body("description").isString().withMessage("please enter a valid description"),
    async (req, res) => {
        try {
            // 1- Valid Request
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            // 2- Check if the movie exist
            const query = util.promisify(connection.query).bind(connection);
            const movie = await query("select * from movies where id = ? ", [req.params.id]);
            if (!movie[0]) {
                res.status(404).json({msg: "movie not found"});
            }

            // 3- Prepare movie object
            const editedMovie = {
                name: req.body.name,
                description: req.body.description,
            };
            
            if(req.file){
                editedMovie.image_url = req.file.filename;
                fs.unlinkSync("./upload/" + movie[0].image_url); // Delete the old image
            }

            // 4- Update the movie            
            await query("update movies set ? where id = ? ", [editedMovie, movie[0].id]);
            res.status(200).json({msg: "Movie Updated Successfully",});
        } catch (error) {
            res.status(500).json(error);
        }
});

// Delete a specific movie
router.delete(
    "/:id", 
    admin, 
    async (req, res) => {
        try {
            // 1- Check if the movie exist
            const query = util.promisify(connection.query).bind(connection);
            const movie = await query("select * from movies where id = ? ", [req.params.id]);
            if (!movie[0]) {
                res.status(404).json({msg: "movie not found"});
            }

            // 2- Delete the image first from folder upload
            fs.unlinkSync("./upload/" + movie[0].image_url);

            // 3- Delete the movie            
            await query("delete from movies where id = ? ", [movie[0].id]);
            res.status(200).json({msg: "Movie Deleted Successfully",});
        } catch (error) {
            res.status(500).json(error);
        }
});


// ==================== Admin & User ====================
// List all movies
router.get("", async (req, res) => {
    const query = util.promisify(connection.query).bind(connection);
    let search = "";
    if (req.query.search) {
        search = `where name LIKE '%${req.query.search}%' or description LIKE '%${req.query.search}%'`
    }
    const movies = await query(`select * from movies ${search}`);
    movies.map((movie) => {
        movie.image_url = "http://" + req.hostname + ":5000/" + movie.image_url;
    });
    res.status(200).json(movies);
});

// Show a specific movie
router.get("/:id", async (req, res) => {
    // 1- Check if the movie exist
    const query = util.promisify(connection.query).bind(connection);
    const movie = await query("select * from movies where id = ? ", [req.params.id]);
    if (!movie[0]) {
        res.status(404).json({msg: "movie not found"});
    }
    movie[0].image_url = "http://" + req.hostname + ":5000/" + movie[0].image_url;
    movie[0].reviews = await query("select * from user_movie_review where movie_id = ? ", movie[0].id);
    res.status(200).json(movie[0]);
});

// Make Review
router.post(
    "/review", 
    authorized, 
    body("movie_id").isNumeric().withMessage("enter a valid movie ID"),
    body("review").isString().withMessage("enter a valid message"),
    async (req, res) => {
        try {
            // 1- Valid Request
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            // 2- Check if the movie exist
            const query = util.promisify(connection.query).bind(connection);
            const movie = await query("select * from movies where id = ? ", [req.body.movie_id]);
            if (!movie[0]) {
                res.status(404).json({msg: "movie not found"});
            }

            // 3- Prepare movie review object
            const movieRview = {
                user_id: res.locals.user.id,
                movie_id: movie[0].id,
                review: req.body.review,
            };

            // 4- Insert Movie Review Object into Database
            await query("insert into user_movie_review set ? ", movieRview);
            res.status(200).json({msg: "Review Added Successfully"});
        } catch (error) {
            res.status(500).json(error);
        }
    }

);

module.exports = router;