const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripcollab');

let restaurantSchema = mongoose.Schema({
  name: String,
  price: Number,
  rating: Number
});

let hotelSchema = mongoose.Schema({
  name: String,
  price: Number,
  rating: Number
});

let eventSchema = mongoose.Schema({
  name: String,
  start: Date,
  end: Date
});

let attractionSchema = mongoose.Schema({
  name: String
});

let userSchema = mongoose.Schema({
  googleId: String,
  username: String,
  trips: Array
});

let tripSchema = mongoose.Schema({
  name: String,
  location: String,
  restaurants: [restaurantSchema],
  hotels: [hotelSchema],
  events: [eventSchema],
  attractions: [attractionSchema]
});

const User = mongoose.model('User', userSchema);
const Trip = mongoose.model('Trip', tripSchema);

// // dummy data for testing
// const testTrip = {
//   name: 'example trip2',
//   location: 'chicago',
//   restaurants: [{name: 'Burger King', price: 1, rating: 3 }],
//   hotels: [{name: 'Hyatt', price: 2, rating: 3 }],
//   events: [{name: 'Some Comedy Show'}],
//   attractions: [{name: 'Space Musuem'}]
// };
//
// const testUser = new User({
//   googleId: 'daniel',
//   username: 'kelly',
//   trips: []
// });
//
// testUser.save(err => {
//   if(err) console.log(err);
// });

let saveTrip = (tripInfo, currentUser) => {
  const trip = new Trip({
    name: tripInfo.name,
    location: tripInfo.location,
    restaurants: tripInfo.restaurants,
    hotels: tripInfo.hotels,
    events: tripInfo.events,
    attractions: tripInfo.attractions
  });

  const trip_id = trip._id;
  console.log('trip id: ', trip._id);

  trip.save(err => {
    if (err) {
      console.log(err);
    }
  });

  User.find({googleId: currentUser}, (err, user) => {
    user[0].trips = user[0].trips.concat(trip_id);
    user[0].save(err => {
      if(err) {
        console.log(err);
      }
    });
  });
};

// // test db functionality
// saveTrip(testTrip2, 'daniel');
