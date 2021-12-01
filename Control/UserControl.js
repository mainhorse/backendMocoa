const User = require('../Model/User');


function registerUser(req, res){
    var user = new User();
    var parametros = req.body;
    user.nombre = parametros.nombre;
    user.correo = parametros.correo;
    user.ciudad = parametros.ciudad;
    user.contrasena = parametros.contrasena;
    user.tipoUsuario = parametros.tipoUsuario;
    user.nombreEmpresa = parametros.nombreEmpresa;
    user.ubicacion = parametros.ubicacion;
    user.direcion = parametros.direcion;
    user.tipo = parametros.tipo;
    user.servicio = parametros.servicio;
    user.planes = parametros.planes;
    user.mediosPago = parametros.mediosPago;
    user.promociones = parametros.promociones;
    user.compras = parametros.compras;
    user.estado = parametros.estado;
    user.permisos = parametros.permisos;
    if(user.correo != '' || user.contrasena != ''){
        User.findOne({correo : user.correo}, (err, usuarioNuevo)=>{
            if(err){
                res.status(500).send({message : "Error en el servidor"});
            } else {
                if(usuarioNuevo){
                    res.status(200).send({message : "Datos inválidos"});
                } else if(!usuarioNuevo){
                    user.save((err, registro)=>{
                        if(err){
                            res.status(500).send({message : "Error en el servidor"});
                        } else{
                            if(!registro){
                                res.status(200).send({message : "Datos inválidos"});
                            } else{
                                res.status(200).send({
                                    message : "Registro exitoso",
                                    usuario : registro
                                });
                            }
                        }
                    })
                }
            }
        })
}
    else{
        res.status(400).send({message : "Hubo un error en tu ingreso, vuelve a intentar"});
    }

}

function loginUser(req, res){
    let params = req.body;
    let correo = params.correo;
    let contrasena = params.contrasena;
    User.findOne({correo : correo , contrasena : contrasena},(err, buscarUsuario)=>{
        if(err){
            res.status(500).send({mensaje : "Error en el servidor"});
        } else {
            if(!buscarUsuario){
                res.status(200).send({mensaje: "para ingresar debes registrarte"});
            }else{
                res.status(200).send({
                    mensaje : "bienvenido",
                    usuario : buscarUsuario
                });
            }
        }
    });
}

function updateUser(req, res){
    let idUsuario = req.params.id;
    let datos = req.body;
    User.findByIdAndUpdate(idUsuario,datos, (err, usuarioActualizado)=>{
        if(err){
            res.status(500).send({mensaje : 'Error en el servidor'});
        }else {
            if(!usuarioActualizado){
                res.status(401).send({mensaje : 'No se pudieron actualizar los datos, intente mas tarde'})
            }else{
                User.findById(idUsuario, (err, actualizacion)=>{
                    res.status(200).send({
                        mensaje : 'Se han actualizado tus datos',
                        usuario : actualizacion
                    })
                })
            }
        }
    })
}


module.exports = {
    registerUser,
    loginUser,
    updateUser
}
   