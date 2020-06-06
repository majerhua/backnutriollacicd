var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost' || process.env.HOST,
  user     : 'root' || process.env.USER,
  password : '' || process.env.PASSWORD,
  database : 'calculadora_nutricional' || process.env.DB
});

module.exports = connection;