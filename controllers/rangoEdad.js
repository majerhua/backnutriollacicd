'use strict'
const con = require('../conexion/conexion');

function getRangoEdades(req,res){

    con.query("SELECT * FROM rango_edad", function (err, sexo, field) {
        if (err) return res.status(500).send({message:'Error al realizar la peticion'})
        res.status(200).send({data:sexo})
    });
}

module.exports = {
	getRangoEdades
}
