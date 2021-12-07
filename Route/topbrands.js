const Route = require('express').Router();

Route.get('/bikebrand',function (req, res){
     res.json(["Royal Enfield ","Yamaha ","Hero ","KTM ","Bajaj","Honda","Suzuki"]);
});

Route.get('/carbrand',function (req, res){
     res.json(["BMW","Hyundai","Mercedes-Benz","Kia ","Audi","Honda","volkswagen"]);
});


module.exports = Route;