const express = require('express');
const session = require('express-session');
const passport = require('passport');
const keys = require('./keys');
var cookieParser = require('cookie-parser');

const app = express();

require('./passport');

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
}

app.use(session({ secret: keys.cookie, cookie: { maxAge: 6000000 }}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/commonRoutes')(app);


app.listen(PORT, () => {
    console.log();
    
});

