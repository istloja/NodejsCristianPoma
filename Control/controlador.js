const modelo = require("../Model/Usuario");
exports.getAll = (req, res) => {
    console.log(req)
    modelo.getAll((err, data) => {
        if (err)
            res.status(500).send({ mensaje: "No se pudo obtener los datos" });
        else res.send(data);
    });
};

exports.crearNuevoUsuario = (req, res) => {
    const nuevoUsuario = new modelo({
        id_usuario: req.body.id_usuario,
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        correo: req.body.correo,
        tipo: req.body.tipo
    });
    modelo.crearNuevoUsuario(nuevoUsuario, (err, data) => {
        if (err)
            res.status(500).send({ mensaje: "Ocurrio un error al crear el usuario" });
        else res.send(data);
    })
}

exports.eliminarUsuario = (req, res) => {
    const eliminarUser = {
        id_usuario: req.body.id_usuario
    };
    modelo.eliminarUsuario(eliminarUser, (err, data) => {
        if (err)
            res.status(500).send({ mensaje: "Ocurrio un error al eliminar el usuario" });
        else res.send(data);
    })
}

exports.actualizarUsuario = (req, res) => {
    const id_usuario = req.body.id_usuario;
    const editUser = new modelo(req.body);

    modelo.actualizarUsuario(id_usuario, editUser, (err, data) => {

        if (err) {
            if (err.kind == "not_found") {
                res.status(400).send({ mensaje: "Non se encontro el usuario con ese ID" });
            }
            else {
                res.status(500).send({ mensaje: "Ocurrio un error al actualizar el usuario" });
            }
        } else {
            res.send(data);
        }
    })
}