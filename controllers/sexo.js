'use strict'
const con = require('../conexion/conexion');

function getSexos(req,res){

    con.query("SELECT * FROM Sexo", function (err, sexo, field) {
        if (err) return res.status(500).send({message:'Error al realizar la peticion'})
        res.status(200).send({data:sexo})
    });
}

module.exports = {
	getSexos
}
