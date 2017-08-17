const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static('public'));


app.listen(8017, function(){
  console.log('working');
});
