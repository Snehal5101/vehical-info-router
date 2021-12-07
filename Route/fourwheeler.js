const Route=require('express').Router();

Route.get('/', function(req, res){
    res.send("Four-wheeler Vehical Information");
});

Route.get('/category',function(req, res){
    res.json(["popular car","top brands","body shape"]);
});

module.exports=Route;