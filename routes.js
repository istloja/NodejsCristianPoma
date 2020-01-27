module.exports =app =>{
    const pais= require('./Control/controlador');
    const provincia = require('./Control/controladorProvincia');
    app.get('/obtenerTodos', pais.getAll);
    app.post('/crearPais', pais.crearNuevoPais); 
    app.get('/obtenerTodosProv', provincia.getAll); 
    app.post('/crearProv', provincia.crearNuevaProv);
    app.post('/editarProv', provincia.actualizaProv); 
    app.post('/buscarxId', provincia.buscarxId)
}
