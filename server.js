var express = require('express'), 
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));
app.use(express.static(__dirname + '/public'));

var connectionString = env === 'development' ? 'mongodb://localhost/multivision'
    : 'mongodb://will093:093@ds163060.mlab.com:63060/multivision';

mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});

app.get('/partials/:partialPath', function(req, res) {
    res.render('partials/' +  req.params.partialPath);
});

// For any requests from the client render and respond with the index view.
app.get('*', function(req, res) {
    res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log('Listening to port' + port + '...');