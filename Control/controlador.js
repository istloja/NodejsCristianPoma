const modelo = require("../Model/Pais");
exports.getAll = (req, res) => {

    modelo.getAll((err, data) => {
        if (err)
            res.status(500).send({ mensaje: "No se pudo obtener los datos" });
        else res.send(data);
    });
};

exports.crearNuevoPais = (req, res) => {
    const nuevoPais = new modelo({
        idpais: req.body.idpais,
        nombre: req.body.nombre,
        moneda: req.body.moneda,
        superficie: req.body.superficie,
        idioma: req.body.idioma,
        nroHabitantes: req.body.nroHabitantes
    });
    modelo.crearNuevoPais(nuevoPais, (err, data) => {
        if (err)
            res.status(500).send({ mensaje: "Ocurrio un error al crear el pais" });
        else res.send(data);
    })
}

exports.eliminarPais = (req, res) => {
    const elimPais = {
        idpais: req.body.idpais
    };
    modelo.eliminarUsuario(elimPais, (err, data) => {
        if (err)
            res.status(500).send({ mensaje: "Ocurrio un error al eliminar el pais" });
        else res.send(data);
    })
}