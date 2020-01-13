const sql= require('../Base/Db')
const usuario=function(Usuario){
    this.id_usuario=Usuario.id_usuario;
    this.cedula=Usuario.cedula;
    this.nombre=Usuario.nombre;
    this.apellido-Usuario.apellido;
    this.direccion=Usuario.direccion;
    this.telefono=Usuario.telefono;
    this.correo=Usuario.correo;
    this.tipo=Usuario.tipo;
}; 

usuario.getAll=result =>{
    mysql.query(
      "Select * from usuario;", (err, res)=>{
          if(err){
              console.log('Error de consulta', err)
              result(-1, err);
              return;
          } else {
            console.log(res);
            result(1, res);
          }
      }  
    );
};

module.exports= usuario;