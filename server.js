var express = require("express");
var app = express();
var PORT = process.env.PORT || 9595;
var db = require("./models");
var path = require("path");


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//routes

require("./routes/burgerRoutes")(app);


db.sequelize.sync({force : false}).then(function(){
    app.listen(PORT, function(){
        console.log("Listening on: " + PORT);
    });
});


