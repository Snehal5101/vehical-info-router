
const Route = require('express').Router();

Route.get('/', function (req, res){
    res.send("Two-Wheeler Vehical Information");
});

Route.get('/bikecategory',function (req, res){
    res.json(["popular bikes","top brands","body shape"]);
});

// Route.get('/bikecategory/popular',function (req, res){
//     res.json(["Royal Enfield Classic 350","Royal Enfield Bullet 350","Yamaha YZF R15 V3","Yamaha MT 15","Hero Splender Plus","KTM 200 Duke"]);
// });


module.exports = Route;