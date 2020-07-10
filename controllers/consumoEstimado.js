'use strict'
const con = require('../conexion/conexion');

function getConsumoEstimado(req,res){

	var idSexo = req.query.idSexo || req.body.idSexo;
	var idRangoEdad = req.query.idRangoEdad || req.body.idRangoEdad;

    var sql_consumo_Estimado="SELECT ";
    sql_consumo_Estimado+="ga.Nombre nombreGrupoAlimenticio, ";
    sql_consumo_Estimado+="ga.Id idgrupoAlimenticio, ";
    sql_consumo_Estimado+="s.Id idSexo, ";
    sql_consumo_Estimado+="s.Descripcion descripcionSexo, ";
    sql_consumo_Estimado+="re.Id idRangoEdad, ";
    sql_consumo_Estimado+="re.Descripcion descripcionRangoEdad, ";
    sql_consumo_Estimado+="ce.CantidadPorciones CantidadPorcionesEstimado, ";
    sql_consumo_Estimado+="ga.Color color ";
    sql_consumo_Estimado+= "FROM consumo_estimado ce ";
    sql_consumo_Estimado+= "INNER JOIN grupo_alimenticio ga  ON ga.Id = ce.IdGrupoAlimenticio ";
    sql_consumo_Estimado+= "INNER JOIN sexo s  ON s.Id = ce.IdSexo ";
    sql_consumo_Estimado+= "INNER JOIN rango_edad re  ON re.Id = ce.IdRangoEdad ";
    sql_consumo_Estimado+="WHERE ce.IdSexo="+idSexo+" AND ce.IdRangoEdad="+idRangoEdad;


    var sql_aporte_estimado = "SELECT distinct ";
    sql_aporte_estimado+= "Kcal ";
    sql_aporte_estimado+="FROM Aporte_Estimado ";
    sql_aporte_estimado+="WHERE IdSexo="+idSexo+" AND IdRangoEdad="+idRangoEdad;

    con.query(sql_consumo_Estimado, function (err, consumo_estimado, field) {
        if (err) return res.status(500).send({message:err.message})
        con.query(sql_aporte_estimado, function (err, aporte_estimado, field) {
            if (err) return res.status(500).send({message:err.message})
            let kcal = 0
            if(aporte_estimado.length > 0)
                kcal = aporte_estimado[0].Kcal;
                
            res.status(200).send({data:{"kcalEstimado":kcal,"consumoEstimado":consumo_estimado}})
        });
        
    });
}

module.exports = {
	getConsumoEstimado
}
