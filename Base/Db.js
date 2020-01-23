const mysql= require("mysql");
const config= require("../Config/db.config");
const conexion= mysql.createConnection({
    host:config.HOST,
    user:config.USER,
    password:config.PASSWORD,
    database:config.BD
});

conexion.connect(err =>{
    if(err) throw err;
    console.log("Conectado con exito")
})

module.exports= conexion;