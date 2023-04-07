const connection = require('../db/connection');
const util = require("util");


const authorized = async (req, res, next) => {
    const query = util.promisify(connection.query).bind(connection);
    const { token } = req.headers;
    const user = await query("select * from users where token = ? ", [token]);
    if (user[0]){
        next();
    } else {
        res.status(403).json({msg: "you are not authorized",});
    }
};

module.exports = authorized;