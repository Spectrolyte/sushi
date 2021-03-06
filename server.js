var express = require('express');
var bodyParser = require('body-parser');
var router = require('./controllers/sushi_controllers.js');
var exphbs  = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.use(router);

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});