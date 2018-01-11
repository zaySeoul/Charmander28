const axios = require('axios');
const config = require('./config/config');

let filterBusinesses = (array) => {
  return array.map(business => {
    console.log('business categories array: ', business.categories);
    return {
      id: business.id,
      name: business.name,
      imageUrl: business.image_url,
      url: business.url,
      rating: business.rating
    };
  });
}

let getBusinessesFromYelp = (term, location, price, cb) => {
  // parameters:

  // let queryURL = `https://api.yelp.com/v3/businesses/search?categories=
  // ${category}&location=${location}&price=${price}&limit=10&sort_by=rating`;

  let queryURL = `https://api.yelp.com/v3/businesses/search?term=${category}&location=${location}&price=${price}&limit=10&sort_by=rating`;


  axios({
    method: 'get',
    url: queryURL,
    headers: {
      'Authorization': `Bearer ${config.YELP_API_KEY}`
    },
  })
    .then((response) => {
      cb(filterBusinesses(response.data.businesses));
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports.getBusinessesFromYelp = getBusinessesFromYelp;
