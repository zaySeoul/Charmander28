import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchLocation from './SearchLocation.jsx';
import AddPrice from './AddPrice.jsx';
import Header from './navHeader.jsx';
import AddCategory from './AddCategory.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    console.log('index');
    super(props);
    this.state = {
      location: '',
      price: '',
      activities: [],
      sleep: [],
      eat: [],
      party:[],
      explore:[],
    };
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.setActivities = this.setActivities.bind(this);
    this.go = this.go.bind(this);
  }

  onChangeLocation(destination) {
    this.setState({
      location: destination,
    }, ()=>{console.log('Destination has been set!', this.state.location);});

  }

  onChangePrice(value) {
    this.setState({
      price: value,
    }, ()=>{console.log('Price has been set!', this.state.price);});
    this.setActivities = this.setActivities.bind(this);
  }

  setActivities(data) {
    this.setState({
      activities: data,
    });
  }

  go() {
    console.log('I am componentDidMount');
    if (this.state.activities.includes('explore')) {
      console.log('Im inside if stmt explore');
      axios.post('http://localhost:3000/explore', {
        location: this.state.location,
        price: this.state.price,
      })
        .then(response => {
           console.log('successfull', response);
        })
        .catch(error => {
          console.log('error..!!', error);
        });
    }

     if (this.state.activities.includes('sleep')) {
      console.log('Im inside sleep stmt');
      axios.post('http://localhost:3000/sleep', {
        location: this.state.location,
        price: this.state.price,
      })
        .then(response => {
           console.log('successfull', response);
        })
        .catch(error => {
          console.log('error..!!', error);
        });
    }

     if (this.state.activities.includes('eat')) {
      console.log('Im inside eat stmt');
      axios.post('http://localhost:3000/eat', {
        location: this.state.location,
        price: this.state.price,
      })
        .then(response => {
           console.log('successfull', response);
        })
        .catch(error => {
          console.log('error..!!', error);
        });
    }

      if (this.state.activities.includes('party')) {
      console.log('Im inside party stmt');
      axios.post('http://localhost:3000/party', {
        location: this.state.location,
        price: this.state.price,
      })
        .then(response => {
           console.log('successfull', response);
        })
        .catch(error => {
          console.log('error..!!', error);
        });
      }


  }

  render() {
    // console.log('new state', this.state.activities);
    return (
      <div>
        <div>
          <h1>Trip collab</h1>
          <div>
            <SearchLocation changeLoc={this.onChangeLocation} />
            <AddPrice changeBudget={this.onChangePrice} />
            <AddCategory setActivities={this.setActivities} />
          </div>
        </div>
        <div>
          <button type="button" className="btn btn-primary mb-2" onClick={this.go} > GO </button>
        </div>
      </div>
    );
  }
}

export default App;
