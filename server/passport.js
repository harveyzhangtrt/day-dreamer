const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const keys = require('./keys');
let user = {};
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log(user)
    done(null, user);
    
});

passport.use(
    new SpotifyStrategy(
        {
            clientID: keys.spotifyClientID,
            clientSecret: keys.spotifyClientSecret,
            callbackURL: "/auth/callback",
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            console.log(profile)
            user = profile
            done(null, user);
        }
    )
);

