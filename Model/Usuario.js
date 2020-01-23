const sql = require('../Base/Db')
const usuario = function (Usuario) {
    this.id_usuario = Usuario.id_usuario;
    this.cedula = Usuario.cedula;
    this.nombre = Usuario.nombre;
    this.apellido = Usuario.apellido;
    this.direccion = Usuario.direccion;
    this.telefono = Usuario.telefono;
    this.correo = Usuario.correo;
    this.tipo = Usuario.tipo;
};

usuario.getAll = result => {
    sql.query("Select * from usuario;", (err, res) => {
        if (err) {
            console.log('Error de consulta', err)
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    }
    );
};

usuario.crearNuevoUsuario = (nuevoUsuario, result) => {
    sql.query("Insert into usuario SET ?", nuevoUsuario, (err, res) => {
        if (err) {
            console.log('Error al crear el usuario', err)
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    }
    )
};

usuario.eliminarUsuario= (eliminarUser, result) =>{
    sql.query("Delete from usuario where ?", eliminarUser, (err, res)=>{
        if (err) {
            console.log('Error al eliminar el usuario', err)
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    }) 
}
module.exports = usuario;