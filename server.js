const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

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



//*************************************************






app.listen(8017, function(){
  console.log('working');
});
