'use strict'
const con = require('../conexion/conexion');

function getAlimentos(req,res){

    var idGrupoAlimenticio = req.query.idGrupoAlimenticio || req.body.idGrupoAlimenticio;

    var sql_alimento = "SELECT ";
    sql_alimento+="a.Nombre, ";
    sql_alimento+="a.Peso, ";
    sql_alimento+="a.MedidaCasera ";
    sql_alimento+="FROM alimento a ";
    sql_alimento+="WHERE IdGrupoAlimenticio="+idGrupoAlimenticio;

    con.query(sql_alimento, function (err, alimentos, field) {
        if (err) return res.status(500).send({message:err})
        res.status(200).send({data:alimentos})
    });
}

module.exports = {
	getAlimentos
}
