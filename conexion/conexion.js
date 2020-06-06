var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.HOST || 'un0jueuv2mam78uv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com' ,
  user     : process.env.USER || 'ocg1lw0y9qgivy94',
  password : process.env.PASSWORD || 'dgmnqp6wwem3ray1',
  database : process.env.DB || 'r1tc3lb703nrg0lj'
});

module.exports = connection;