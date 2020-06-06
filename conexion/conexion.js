var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.HOST || 'localhost' ,
  user     : process.env.USER || 'root',
  password : process.env.PASSWORD || '',
  database : process.env.DB || 'calculadora_nutricional'
});

module.exports = connection;