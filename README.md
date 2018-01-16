## Trip Collab

A collaborative way to organize group trips

## Team

  - Daniel Kelly (Backend Development)
  - Peter Wang (Front End Development)
  - Steven Lee (Backend Development & Front End Stylization)
  - Tejaswi Guvvala (Front End Development)

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)
1. [Front End Development](#front-end-development)
## Usage

Used for managing trips for individuals. Allows a user to search the events,restaurents,activities around the destination place. Users can also save their trips and collab with other users.

## Requirements

* Node
* Express
* React
* Mongo DB
* mongoose
* Passport
* body-parser
* Axios
* bluebird
* passport-local
* react-dom
* webpack
* babel
* react-router-dom
* bootstrap

## Development
Once you have forked the repo from https://github.com/Charmander28/Charmander28 , install all the dependencies.
### Installing Dependencies

From within the root directory:

npm install


## Getting the tokens for the API calls
We use yelp, Eventbrite API’s to collect the data, so you will need API keys for them to make requests. There are links below to create your own API key. 
* Yelp API Key: https://www.yelp.com/fusion
* Eventbrite API Key: https://www.eventbrite.com/developer/v3/quickstart/


## Front End Development

React, Axios, and React-Router were used heavily in the creation of this project. During the initial stages of this project we had a general idea of the direction of the project but did not know whether to go with an SPA design or not. This lead to some back-tracking and re-writing of code, as well as making one of our pre-existing files obsolete. There is an index.jsx file left over during our re-write process. 

The search bar is a simple input field implemented as a stateful component to pass data back to the parent component. It is set to update it's value upon any change made inside the field, and it's state will update upon pressing the return key or on deselection of the field (onBlur). 

The app.jsx file is the new top-level container for the app. In integrating React-Router,  one of the challenges we faced was in integrating the switching of the App View to the Trip View upon sending the appropriate information to the server. Ideally, the View would only change upon successful receipt of data back from the server. However, as we were unable to successfully implement this function into the App file, the alternative was to simply change the state of the view which would then cause the Trip View to render in place. This is done without the use of React-Router inside of the "go" function. 

With a more focused sense of direction we were able to integrate React-Router into the TripView seamlessly. The `<BrowserRouter>` tag acts as the parent `<div>` and maintains the history of the page. This allows `<Route>`, `<Link>`, and `<Switch>` to work as intended as the Route all of the aforementioned tags require the user's browser history. This will also allow future integration of the "back" and "forward" browser features to allow users to backtrack or trace their history. 

`<Peter W>`

## Contributing

See CONTRIBUTING.md for contribution guidelines
