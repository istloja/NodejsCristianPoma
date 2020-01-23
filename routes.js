module.exports =app =>{
    const usuario= require('./Control/controlador');
    app.post('/obtenerTodos', usuario.getAll);
    app.post('/crearUsuario', usuario.crearNuevoUsuario);
    app.post('/eliminarUser', usuario.eliminarUsuario);
    app.post('/editUser', usuario.actualizarUsuario);
    app.post('/userMongo', require('./Config/DbMongo'))
}