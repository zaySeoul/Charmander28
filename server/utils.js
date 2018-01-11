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

const getBusinessesFromYelp = (cb) => {
  // parameters: category, location, price
  // const queryURL = `https://api.yelp.com/v3/businesses/search?categories=
  // ${category}&sort_by=rating&limit=10&location=${location}&price=${price}`;
  const testURL = 'https://api.yelp.com/v3/businesses/search?categories=restaurants&sort_by=rating&limit=10&location=chicago&price=1';

  axios({
    method: 'get',
    url: testURL,
    headers: {
      'Authorization': `Bearer ${config.YELP_API_KEY}`
    }
  }).then((response) => {
    // name, imageUrl
    // .id .name .image_url .url .rating
    cb(filterBusinesses(response.data.businesses));
    // console.log(response.data);
  })
.catch((error) => {
  console.log(error);
});

};

module.exports.getBusinessesFromYelp = getBusinessesFromYelp;
