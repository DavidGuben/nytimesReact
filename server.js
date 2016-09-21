// SETUP
// ========================================================

// npm packages
var express     = require('express');
var app         = express();
var bodyparser  = require('body-parser');
var React       = require('react');
var ReactDOM    = require('react-dom');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var port   = process.env.port || 8080;  // set port
var router = express.Router();          // instance of express router
// api routes
router.get('/', function(req, res) {
  res.json({ message:'hello world, with api'});
});

router.get('/api/saved', function(req, res){

});

router.post('/api/saved', function(req, res){

});

router.delete('/api/saved', function(req, res){

});

// REGISTER ROUTES
app.use('/api', router);

// START server
app.listen(port);
console.log('connected to port' + port);
