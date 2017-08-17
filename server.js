const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./.config.js');
const massive = require('massive');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(bodyParser.json());

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
const strategy = new Auth0Strategy({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL:  'http://localhost:3000/home'
}, (accessToken, refreshToken, extraParams, profile, done) => {
  return done(null, profile);
});

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());



app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
   }
}))

const env = {
  AUTH0_CLIENT_ID: config.auth0.clientID,
  AUTH0_DOMAIN: config.auth0.domain,
  AUTH0_CALLBACK_URL: 'http://localhost:3000/home'
};


// Perform session logout and redirect to homepage
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/user'
app.get('/auth',
  passport.authenticate('auth0', { failureRedirect: '/' }), (req, res) => {
    res.redirect(req.session.returnTo || '/user');
  });


//*************************************************
app.get('/developers', function (req, res) {
  res.status(200).send('here are the developers')
  console.log('hereyou go');

})


app.get('/home', function (req, res) {
  res.send('This is the home!')
  console.log('it worked');
  req.session.joe = 20;
  console.log(req.session.joe);

})


app.listen(3101, function(){
  console.log('working');
});
