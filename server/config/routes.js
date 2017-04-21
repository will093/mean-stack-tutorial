var auth = require('./auth');

module.exports = function (app) {
    app.get('/partials/*', function (req, res) {
        res.render('../../public/app/' + req.params[0]);
    });

    app.post('/login', auth.authenticate)   ;

    // For any requests from the client render and respond with the index view.
    app.get('*', function (req, res) {
        res.render('index');
    });
};