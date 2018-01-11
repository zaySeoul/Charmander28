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
  // dummy request object
  // req.body = {
  //   'location': 'chicago',
  //   'cost': 4
  // }
  const requestBody = {
    location: 'chicago',
    categories: ['asian', 'mexican'],
    price: 4
  };
  const term = 'restaurants';
  // const location = 'req.body.location';
  // const cost = req.body.cost;
  const location = requestBody.location;
  const price = requestBody.price;
  const categories = requestBody.categories;

  utils.getBusinessesFromYelp(term, categories, location, price, (data) => {
    res.send(data);
  });
});

app.get('/explore', (req, res) => {
  const term = 'tourism';
  const categories = ['landmarks', 'galleries', 'parks', 'musuems'];
  const location = req.body.location || 'chicago';
  const price = '';

  utils.getBusinessesFromYelp(term, categories, location, price, (data) => {
    res.send(data);
  });
});

app.get('/party', (req, res) => {

});

app.get('/sleep', (req, res) => {
  // req.body = {
  //   'location': 'chicago',
  //   'cost': 3
  // };

  const requestBody = {
    location: 'chicago',
    cost: '1,2,3'
  };

  const term = 'hotels';
  // const location = req.body.location;
  // const cost = req.body.cost;
  const location = requestBody.location;
  const price = requestBody.cost;
  const categories = '';

  utils.getBusinessesFromYelp(term, categories, location, price, (data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log('listening on port 3000!');
});

// Notes
// var o = {p: 42, q: true};
// var {p, q} = o;

// when to use res.end vs. res.json
