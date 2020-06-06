'use strict'
const con = require('../conexion/conexion');

function getSexos(req,res){

    con.query("SELECT * FROM sexo", function (err, sexo, field) {
        if (err) return res.status(500).send({message:err.message})
        res.status(200).send({data:sexo})
    });
}

module.exports = {
	getSexos
}
