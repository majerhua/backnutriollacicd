'use strict'
//PARA PODER USAR LAS FUNCIONALIDADES DE ECMASCRIPT6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;


app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());


const sexoCtrl = require('./controllers/sexo');
const rangoEdadCtrl = require('./controllers/rangoEdad');
const grupoAlimenticioCtrl = require('./controllers/grupoAlimenticio');
const consumoEstimadoCtrl = require('./controllers/consumoEstimado');
const alimentoCtrl = require('./controllers/alimento');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

/*SEXO*/

app.get('/api/sexos',sexoCtrl.getSexos);

/*RANGO EDADES*/ 

app.get('/api/rango-edades',rangoEdadCtrl.getRangoEdades);

/*GRUPO ALIMENTICIO*/

app.get('/api/grupos-alimenticios',grupoAlimenticioCtrl.getGrupoAlimenticios);

/*COMSUMO ESTIMADO*/ 

app.get('/api/consumo-estimado',consumoEstimadoCtrl.getConsumoEstimado);
 
/* ALIMENTOS*/
app.get('/api/alimentos',alimentoCtrl.getAlimentos);
app.get('/api/alimento/:idAlimento',alimentoCtrl.getAlimento);


app.listen(port,()=>{
    console.log(`Api rest corriendo en http://localhost:${port}`);
});