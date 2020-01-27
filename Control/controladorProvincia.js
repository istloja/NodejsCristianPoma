const modelo = require("../Model/Provincia");
exports.getAll = (req, res) => {
    
    modelo.getAll((err, data) => {
        if (err)
            res.status(500).send({ mensaje: "No se pudo obtener los datos" });
        else res.send(data);
    });
};

exports.buscarxId= (req, res)=>{
    const buscarId= new modelo({
        pais_idpais:req.body.pais_idpais
    })
    modelo.buscarxId(buscarId, (err, data)=>{
        if (err)
            res.status(500).send({ mensaje: "Ocurrio un error al crear el pais" });
        else res.send(data);
    })
}

exports.crearNuevaProv = (req, res) => {
    const nuevaProv = new modelo({
        idprovincia: req.body.idprovincia,
        nombre: req.body.nombre,
        nroCantones: req.body.nroCantones,
        superficie: req.body.superficie,
        region: req.body.region,
        pais_idpais: req.body.pais_idpais
    });
    modelo.crearNuevaProv(nuevaProv, (err, data) => {
        if (err)
            res.status(500).send({ mensaje: "Ocurrio un error al crear el pais" });
        else res.send(data);
    })
}

exports.actualizaProv = (req, res) => {
    const idprovincia = req.body.idprovincia;
    const editProv = new modelo(req.body);

    modelo.actualizaProv (idprovincia, editProv, (err, data) => {

        if (err) {
            if (err.kind == "not_found") {
                res.status(400).send({ mensaje: "No se encontro la provincia con ese ID" });
            }
            else {
                res.status(500).send({ mensaje: "Ocurrio un error al actualizar la provincia" });
            }
        } else {
            res.send(data);
        }
    })
}