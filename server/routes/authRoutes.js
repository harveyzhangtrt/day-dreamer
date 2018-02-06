const passport = require('passport');

module.exports = app => {
    app.get('/auth/spotify',
        passport.authenticate('spotify',
        {showDialog: true}),
        function(req, res){

    });
    app.get(
        '/auth/callback',
        passport.authenticate('spotify'),
        (req, res) => {
            res.redirect('/');
        }
);

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
});

};

