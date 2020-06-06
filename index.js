'use strict'
//PARA PODER USAR LAS FUNCIONALIDADES DE ECMASCRIPT6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;
/*SEXO*/
const sexoCtrl = require('./controllers/sexo');
app.get('/api/sexos',sexoCtrl.getSexos);

/*RANGO EDADES*/ 
const rangoEdadCtrl = require('./controllers/rangoEdad');
app.get('/api/rango-edades',rangoEdadCtrl.getRangoEdades);

/*GRUPO ALIMENTICIO*/
const grupoAlimenticioCtrl = require('./controllers/grupoAlimenticio');
app.get('/api/grupos-alimenticios',grupoAlimenticioCtrl.getGrupoAlimenticios);

/*COMSUMO ESTIMADO*/ 
const consumoEstimadoCtrl = require('./controllers/consumoEstimado');
app.get('/api/consumo-estimado',consumoEstimadoCtrl.getConsumoEstimado);
 
app.listen(port,()=>{
    console.log(`Api rest corriendo en http://localhost:${port}`);
});