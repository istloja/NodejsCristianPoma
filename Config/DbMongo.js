const mongoose= require("mongoose");

var connection = mongoose.connect('mongodb+srv://Black16:alexanderpoma16@cluster0-qq4lf.mongodb.net/test?retryWrites=true&w=majority', 
{
    UseMongoClient:true
});

mongoose.connection.on("open", function(ref) {
    console.log("Connected to mongo server.");
    
});