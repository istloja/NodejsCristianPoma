const mysql= require("mysql");
const config= require("../Config/db.confiig");
const conexion= mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    pass: config.PASSWORD,
    database: config.BD
});

conexion.connect(err =>{
    if(err) throw err;
    console.log("Conexion exitosa")
})

module.exports= conexion;