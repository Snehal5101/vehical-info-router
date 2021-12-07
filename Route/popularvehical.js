const Route = require('express').Router();

Route.get('/popularbike',function (req, res){
     res.json(["Royal Enfield Classic 350","Royal Enfield Bullet 350","Yamaha YZF R15 V3","Yamaha MT 15","Hero Splender Plus","KTM 200 Duke"]);
});

Route.get('/popularcar',function (req, res){
     res.json(["Hyundai Creta","Toyota Fortuner","Maruti Vitara Brezza","Mahindra Scorpio"]);
});



module.exports = Route;