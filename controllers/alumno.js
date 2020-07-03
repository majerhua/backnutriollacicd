'use strict'
const con = require('../conexion/conexion');

function getAlumnos(req,res){

    con.query("SELECT * FROM alumno", function (err, alumnos, field) {
        if (err) return res.status(500).send({message:err.message})
        res.status(200).send({alumnos:alumnos})
    });
}

module.exports = {
	getAlumnos
}
