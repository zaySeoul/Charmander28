const express = require('express');
const bodyParser = require('body-parser');
// const db = require('../database');
const utils = require('./utils');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../react-client/dist`));

// location, price, categories populated with dummy data unless client sends
// params in req.body

app.post('/eat', (req, res) => {
  console.log('eat endpoint hit');
  const term = 'restaurants';
  const options = {
    location: req.body.location || 'chicago',
    price: req.body.price || 4,
    term: term,
    categories: req.body.categories || '',
    api: 'yelp'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/explore', (req, res) => {
  console.log('explore endpoint hit');
  const term = 'tourism';
  const options = {
    location: req.body.location || 'newyork',
    term: term,
    categories: req.body.categories || ['landmarks', 'galleries', 'parks', 'musuems'],
    api: 'yelp'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.post('/party', (req, res) => {
  console.log('party endpoint hit');
   const options = {
     location: req.body.location || 'chicago',
     api: 'eventBrite'
   };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
 });

app.post('/sleep', (req, res) => {
  console.log('sleep endpoint hit');
  const term = 'hotels';

  const options = {
    location: req.body.location || 'philadelphia',
    price: req.body.price || '3',
    term: term,
    api: 'yelp'
  };

  utils.getBusinessesOrEvents(options, (data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log('listening on port 3000!');
});
