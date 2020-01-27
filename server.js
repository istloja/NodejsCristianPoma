const express= require ("express");
const bodyParser= require ("body-parser");
const app=express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/hola/es", (req, res) =>{
    res.json({mensaje:"Hola mundo"})
}); 

app.get("/hola/en", (req, res) =>{
    res.json({mensaje:"Hello world"})
}); 

require('./routes')(app);
app.listen(8001, ()=> {
    console.log("Esa es mi cholo ")
})