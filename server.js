var path = require('path');
var express = require('express');
// var webpack = require('webpack');
// var config = require('./webpack.config.dev');
var Immutable = require('immutable');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

var app = express();
// var compiler = webpack(config);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

/*
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: false,
  publicPath: config.output.publicPath
}));
*/

var timeout = 2; // demora los llamados

// MOCK DB

var beaches = [
  { id: '1', name: "Reñaca", place:"V Región", "count": 0,
    img:"https://c1.staticflickr.com/3/2782/4502745583_1c3267a12e_b.jpg"},
  { id: '2', name: "Anakena", place:"Isla de Pascua", "count": 0,
    img:"http://www.isladepascua.travel/wp-content/uploads/2012/03/playa-chile-vacaciones-isla-de-pascua.jpg"},
  { id: '3', name: "Pichilemu", place:"VI Región", "count": 0,
    img:"http://chile.voyhoy.com/blog/wp-content/uploads/surfista-pichilemu-voyhoy-2.jpg"},
  { id: '4', name: "La Virgen", place:"III Región", "count": 0,
    img:"http://contenidos.playalavirgen.cl/notas/galerias/fotos/galeria35_270.jpg"},
  { id: '5', name: "Zapallar", place:"V Región", "count": 0,
    img:"http://www.elmostrador.cl/wp-content/uploads/2015/01/Zapallar_816x544.jpg"},
  { id: '6', name: "Pan de Azucar", place:"III Región", "count": 0,
    img:"http://farm5.static.flickr.com/4031/4474776248_396318f77a.jpg"},
  { id: '7', name: "Playa Arena Gruesa", place:"X Región", "count": 0,
    img:"http://www.plataformaurbana.cl/wp-content/uploads/2014/02/1392823726_playa_arena_gruesa-528x351.jpg"}
];

var beachesIm = Immutable.fromJS(beaches.reduce(function(obj,beach){
  obj[beach.id] = beach
  return obj
},{}))

// MOCK DB

app.get('/beaches', function(req,res) {
  setTimeout(function () {
    res.send(beachesIm.toList());
  }, timeout);
});

app.get('/beaches/:id', function(req,res) {
  setTimeout(function () {
    res.send(beachesIm.get(req.params.id));
  }, timeout);
});

app.put('/beaches/:id', function(req,res) {
  beachesIm = beachesIm.set(req.params.id,req.body);
  setTimeout(function () {
    res.send(beachesIm.get(req.params.id));
  }, timeout);
});

app.post('/beaches/:id/vote', function(req,res) {
  beachesIm = beachesIm.updateIn([req.params.id,'count'],function(x) {
    return x + 1;
  });
  setTimeout(function () {
    res.send();
  }, timeout);
});

app.post('/beaches/:id/unvote', function(req,res) {
  beachesIm = beachesIm.updateIn([req.params.id,'count'],function(x) {
    return x - 1;
  });
  setTimeout(function () {
    res.send();
  }, timeout);
});



app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
