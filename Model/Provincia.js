const sql = require('../Base/Db')
const Provincia = function (Provincia) {
    this.idprovincia = Provincia.idprovincia;
    this.nombre = Provincia.nombre;
    this.nroCantones = Provincia.nroCantones;
    this.superficie = Provincia.superficie;
    this.region = Provincia.region;
    this.pais_idpais = Provincia.pais_idpais;
};

Provincia.getAll = result => {
    sql.query("Select * from provincia;", (err, res) => {
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

Provincia.buscarxId = (buscarxId, result)=>{
    sql.query("Select * from provincia where pais_idpais=?", buscarxId, (err,res)=>{
        if (err) {
            console.log('Error de consulta', err)
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    })
}

Provincia.crearNuevaProv = (nuevaProvincia, result) => {
    sql.query("Insert into provincia SET ?", nuevaProvincia, (err, res) => {
        if (err) {
            console.log('Error al crear la Provincia', err)
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    }
    )
};

Provincia.actualizaProv = (idprovincia, editProv, result) => {
    sql.query("UPDATE provincia set nombre=?, nroCantones=?, superficie=?, region=?, pais_idpais=? where idprovincia=?",
        [editProv.nombre, editProv.nroCantones, editProv.superficie, editProv.region, editProv.pais_idpais, idprovincia], (err, res) => {
            if (err) {
                console.log('Error al actualizar la Provincia', err)
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
module.exports = Provincia;