const express = require('express');
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const dotenv = require('dotenv').config();
const app = express();
app.use(cors());
app.use(passport.initialize());
let user = {};

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

// Google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
}, 
    (accessToken, refreshToken, profile, cb) => {
        console.log(JSON.stringify(profile));
        user = {...profile};
        return cb(null, profile);
    }))



const port = 3000;
app.use(express.static(__dirname + '/../public'));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/'}), (req, res) => {
    res.redirect('/profile');
});

app.get('/user', (req, res) => {
    console.log('getting user data');
    res.send(user);
});

app.get('/auth/logout', (req, res) => {
    console.log('logging out!');
    user = {};
    res.redirect('/');
})

const port = 3000;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));