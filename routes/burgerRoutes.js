
var db = require("../models");

module.exports = function (app) {
    app.get("/", function (req, res) {
        db.Burger.findAll().then(function (dbBurger) {
            
            res.render("index", {burger : dbBurger});
           
            });
    });
    app.get("/api/burger", function(req, res){
        db.Burger.findAll({
        }).then(function(dbBurger){
            res.json(dbBurger);
        });
   });

    app.post("/api/burger", function(req, res){
      db.Burger.create(req.body).then(function(dbBurger){
          res.json(dbBurger);
        
      });
    });
    
    app.put("/api/burger/:id", function(req, res){
        db.Burger.update(req.body, {
            where: {
                id : req.params.id
            }
        }).then(function(dbBurger){
            res.json(dbBurger)
        });
    })
};