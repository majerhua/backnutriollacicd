'use strict'
const con = require('../conexion/conexion');

function getConsumoEstimado(req,res){

	var idSexo = req.query.idSexo || req.body.idSexo;
	var idRangoEdad = req.query.idRangoEdad || req.body.idRangoEdad;

    var sql="SELECT ";
    sql+="ga.Nombre nombreGrupoAlimenticio, ";
    sql+="ga.Id idgrupoAlimenticio, ";
    sql+="s.Id idSexo, ";
    sql+="s.Descripcion descripcionSexo, ";
    sql+="re.Id idRangoEdad, ";
    sql+="re.Descripcion descripcionRangoEdad, ";
    sql+="ce.CantidadPorciones CantidadPorcionesEstimado ";
    sql+= "FROM Consumo_Estimado ce ";
    sql+= "INNER JOIN Grupo_Alimenticio ga  ON ga.Id = ce.IdGrupoAlimenticio ";
    sql+= "INNER JOIN Sexo s  ON s.Id = ce.IdSexo ";
    sql+= "INNER JOIN Rango_Edad re  ON re.Id = ce.IdRangoEdad ";
    sql+="WHERE ce.IdSexo="+idSexo+" AND ce.IdRangoEdad="+idRangoEdad;

    con.query(sql, function (err, sexo, field) {
        if (err) return res.status(500).send({message:err.message})
        res.status(200).send({data:sexo})
    });
}

module.exports = {
	getConsumoEstimado
}
