const express = require("express");
const conexionDB = require("./db");
const app = express();

require("dotenv").config();

//conexion
conexionDB();

//Configuraciones Basicas

app.set("name","API-Hotelia");
app.set("port",process.env.PORT || 3500);
app.set("host",process.env.HOST || 'localhost');