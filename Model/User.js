const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre : String,
    correo : String,
    ciudad : String,
    contrasena : String,
    tipoUsuario : String,
    nombreEmpresa : String,
    ubicacion :String,
    direccion : String,
    tipo : String,
    servicio : String,
    planes : String,
    mediosPago : String,
    promociones : String,
    compras : Array,
    estado : Boolean,
    permisos : Boolean

});

module.exports = mongoose.model('User', UserSchema);