const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    nombre : String,
    correo : String,
    ciudad : String,
    contrasena : String,
    tipoUsuario : String,
    estado : Boolean
});

module.exports = mongoose.model('User', UserSchema);