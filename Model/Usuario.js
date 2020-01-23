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

usuario.eliminarUsuario = (eliminarUser, result) => {
    sql.query("Delete from usuario where ?", eliminarUser, (err, res) => {
        if (err) {
            console.log('Error al eliminar el usuario', err)
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    })
}

usuario.actualizarUsuario = (id_usuario, editUser, result) => {
    sql.query("UPDATE usuario set cedula=?, nombre=?, apellido=?, direccion=?, telefono=?, tipo=?, correo=? where id_usuario=?",
        [editUser.cedula, editUser.nombre, editUser.apellido, editUser.direccion, editUser.telefono,
        editUser.tipo, editUser.correo, id_usuario], (err, res) => {
            if (err) {
                console.log('Error al actualizar el usuario', err)
                result(null, err);
                return;
            } else {
                if (res.affectedRows == 0) {
                    result({ kind: "not_found" }, null)
                } else {
                    result(null, res);
                }
            }
        })
}
module.exports = usuario;