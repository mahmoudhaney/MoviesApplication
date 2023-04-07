const router = require("express").Router();
const connection = require('../db/connection');
const authorized = require('../middleware/authorize');
const admin = require('../middleware/admin');
const upload = require('../middleware/uploadImages');
const {body, validationResult} = require("express-validator");
const util = require("util");

// ==================== Admin ====================
// POST Request - Create/Save Movie
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
                image_url: req.file.originalname,
            };

            // 4- Insert movie object into Database
            const query = util.promisify(connection.query).bind(connection);
            await query("insert into movies set ? ", movie);
            res.status(200).json({msg: "Movie Created Successfully",});
        } catch (error) {
            res.status(500).json(error);
        }
});

// PUT Request - Update a specific movie
// router.put("/update/:id", admin, function (req, res) {
//     const {id} = req.params;
//     const movieData = req.body;
//     connection.query("update movies set ? where ?",
//     [{name: movieData.name, description: movieData.description}, {id: id}],
//     (err, result, fields) => {
//         if (err){
//             res.statusCode = 500;
//             res.json({message: "Failed To Update"});
//         }
//         res.json({message: "Movie Updated Successfully"});
//     });
// });

// DELETE Request - Delete a specific movie
// router.delete("/delete/:id", admin, function (req, res) {
//     const {id} = req.params;
//     connection.query("delete from movies where ?", {id: id}, (err, result) => {
//         if(err) {
//             res.statusCode = 500;
//             res.json({message: "Failed to Delete"});
//         }
//         res.json({message: "Movie Deleted"});
//     })
// });


// ==================== Admin & User ====================
// router.get("/movies", function (req, res) {
//     connection.query("select * from movies", (err, result, fields) => {
//         res.json(result);
//     });
// });

// GET Request - Get a specific movie
// router.get("/movie/:id", function (req, res) {
//     const {id} = req.params;
//     connection.query("select * from movies where ?", {id: id}, (err, result, fields) => {
//         if (result[0]) {
//             res.json(result[0]);
//         }
//         else {
//             res.statusCode = 404;
//             res.json({message: "Movie Not Found"})
//         }
//     });
// });

module.exports = router;