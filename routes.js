module.exports =app =>{
    const usuario= require('./Model/Usuario');
    app.post('obtenerTodod', usuario.getAll)
}