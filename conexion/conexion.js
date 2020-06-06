var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost' ||'un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'root' || 'ocg1lw0y9qgivy94',
  password : '' || 'dgmnqp6wwem3ray1',
  database : 'calculadora_nutricional' || 'r1tc3lb703nrg0lj'
});

module.exports = connection;