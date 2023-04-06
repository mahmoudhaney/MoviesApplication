const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'sqluser',
  password : '123456',
  database : 'MoviesApp',
  port     : '3306'
});
 
connection.connect((err) => {
    if (err) {
        console.error("There is a Connection Error");
        return;
    }
    console.log("Connected to MYSQL");
});
 
module.exports = connection;