const Route = require('express').Router();

Route.get('/bikeshape',function (req, res){
     res.json(["Cruiser","Naked","Sportsbike","Tourer","Classic","Dual Sport","Scooter","Moped","Off-road"]);
});

Route.get('/carshape',function (req, res){
     res.json(["micro","Sportcar","hatchback","sedan","SUV","MPV","convertible","wagon","luxury","hybrid car","electric car","diesel car","supercar"]);
});

module.exports = Route;