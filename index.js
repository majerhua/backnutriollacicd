"use strict";
//PARA PODER USAR LAS FUNCIONALIDADES DE ECMASCRIPT6
/*
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const sexoCtrl = require("./controllers/sexo");
const rangoEdadCtrl = require("./controllers/rangoEdad");
const grupoAlimenticioCtrl = require("./controllers/grupoAlimenticio");
const consumoEstimadoCtrl = require("./controllers/consumoEstimado");
const alimentoCtrl = require("./controllers/alimento");
const alumnoCtrl = require("./controllers/alumno");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/api/sexos", sexoCtrl.getSexos);

app.get("/api/rango-edades", rangoEdadCtrl.getRangoEdades);

app.get("/api/grupos-alimenticios", grupoAlimenticioCtrl.getGrupoAlimenticios);

app.get("/api/consumo-estimado", consumoEstimadoCtrl.getConsumoEstimado);

app.get("/api/alimentos", alimentoCtrl.getAlimentos);
app.get("/api/alimento/:idAlimento", alimentoCtrl.getAlimento);

app.get("/api/alumnos", alumnoCtrl.getAlumnos);

app.listen(port, () => {
  console.log(`Api rest corriendo en http://localhost:${port}`);
});
*/
//importing node framework

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  res.send("Hola mundo");
});
app.listen(process.env.PORT || 4000);

module.exports = app;
