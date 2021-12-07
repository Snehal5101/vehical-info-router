let express = require('express');
let app = express();

let bikecategory= require('./Route/two-wheeler');
let popularbike = require('./Route/popularvehical');
let bikebrand = require('./Route/topbrands');
let bikeshape = require('./Route/vehicalshape')

let category= require('./Route/fourwheeler');
let popularcar= require('./Route/popularvehical');
let carbrand = require('./Route/topbrands');
let carshape = require('./Route/vehicalshape')


app.get('/', function(req, res){
    res.send("<h1>Home<h1>");
});

app.use('/twowheeler', bikecategory);

 app.use('/twowheeler/bikecategory',popularbike);

app.use('/twowheeler/bikecategory',bikebrand);

app.use('/twowheeler/bikecategory',bikeshape);

app.use('/fourwheeler',category);

app.use('/fourwheeler/category',popularcar);

app.use('/fourwheeler/category',carbrand);

app.use('/fourwheeler/category',carshape);

app.listen(5000);