const sql = require('../Base/Db')
const Pais = function (Pais) {
    this.idpais = Pais.idpais;
    this.nombre = Pais.nombre;
    this.moneda = Pais.moneda;
    this.superficie = Pais.superficie;
    this.idioma = Pais.idioma;
    this.nroHabitantes = Pais.nroHabitantes;
};

Pais.getAll = result => {
    sql.query("Select * from pais;", (err, res) => {
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
Pais.crearNuevoPais = (nuevoPais, result) => {
    sql.query("Insert into pais SET ?", nuevoPais, (err, res) => {
        if (err) {
            console.log('Error al crear el Pais', err)
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    }
    )
};

Pais.eliminarPais = (elimPais, result) => {
    sql.query("Delete from pais where ?", elimPais, (err, res) => {
        if (err) {
            console.log('Error al eliminar el Pais', err)
            result(null, err);
            return;
        } else {
            result(null, res);
        }
    })
}
module.exports = Pais;