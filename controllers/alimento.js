'use strict'
const con = require('../conexion/conexion');

function getAlimentos(req,res){

    var idGrupoAlimenticio = req.query.idGrupoAlimenticio || req.body.idGrupoAlimenticio;

    var sql_alimento = "SELECT ";
    sql_alimento+="a.Id, ";
    sql_alimento+="a.Nombre, ";
    sql_alimento+="a.Peso, ";
    sql_alimento+="a.MedidaCasera, ";
    sql_alimento+="ga.Nombre GrupoAlimenticio, ";
    sql_alimento+="ga.Id IdGrupoAlimenticio ";
    sql_alimento+="FROM alimento a ";
    sql_alimento+="INNER JOIN grupo_alimenticio ga ON ga.Id = a.IdGrupoAlimenticio ";

    if(idGrupoAlimenticio!=null && idGrupoAlimenticio != undefined){
        sql_alimento+="WHERE IdGrupoAlimenticio="+idGrupoAlimenticio;
    }

    con.query(sql_alimento, function (err, alimentos, field) {
        if (err) return res.status(500).send({message:err})
        res.status(200).send({data:alimentos})
    });
}

function getAlimento(req,res){

    var idAlimento = req.query.idAlimento || req.body.idAlimento || req.params.idAlimento;

    var sql_alimento = "SELECT * FROM alimento WHERE Id="+idAlimento;

    con.query(sql_alimento, function (err, alimentos, field) {
        if (err) return res.status(500).send({message:err.message})
        res.status(200).send({data:alimentos})
    });
}

module.exports = {
	getAlimentos,
    getAlimento
}
