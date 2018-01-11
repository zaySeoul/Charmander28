const axios = require('axios');
const config = require('./config/config');

const filterBusinesses = (array) => {
  return array.map(business => {
    return {
      id: business.id,
      name: business.name,
      imageUrl: business.image_url,
      url: business.url,
      rating: business.rating
    };
  });
}

const getBusinessesFromYelp = (category, location, price, cb) => {
  // parameters:
  const queryURL = `https://api.yelp.com/v3/businesses/search?categories=
  ${category}&sort_by=rating&limit=10&location=${location}&price=${price}`;

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
