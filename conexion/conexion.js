var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'ocg1lw0y9qgivy94',
  password : 'dgmnqp6wwem3ray1',
  database : 'r1tc3lb703nrg0lj'
});

module.exports = connection;