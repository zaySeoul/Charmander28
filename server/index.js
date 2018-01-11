const express = require('express');
const bodyParser = require('body-parser');

// const db = require('../database');
const utils = require('./utils');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/eat', (req, res) => {
  // store info from req body
  //   const location = location the user passes in
  //   const cost     = cost the user selects
  console.log('eat request')
  utils.getBusinessesFromYelp((data) => {
    res.send(data);
  });
});

app.get('/explore', (req, res) => {

});

app.get('/party', (req, res) => {

});

app.get('/sleep', (req, res) => {

});

app.listen(port, () => {
  console.log('listening on port 3000!');
});

// Notes
// var o = {p: 42, q: true};
// var {p, q} = o;

// when to use res.end vs. res.json
