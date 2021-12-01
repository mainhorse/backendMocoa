const express = require('express');
const UsuarioControl = require('../Control/UserControl');

var api = express.Router();

api.post('/registro', UsuarioControl.registerUser);
api.post('/ingreso', UsuarioControl.loginUser);
api.put('/actualizarDatos/:id', UsuarioControl.updateUser);

module.exports = api;