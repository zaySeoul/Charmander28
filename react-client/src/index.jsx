import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchLocation from './components/SearchLocation.jsx';
import AddPrice from './components/AddPrice.jsx';
import Header from './components/navHeader.jsx';
import AddCategory from './components/AddCategory.jsx';

class Index extends React.Component {
  constructor(props) {
    console.log('index');
    super(props);
    this.state = {
      location: '',
      price: '',
      activities: [],
    };
    this.setActivities = this.setActivities.bind(this);
  }

  setActivities(data) {
    this.setState({
      activities: data,
    });
  }


  render() {
    console.log('new state', this.state.activities);
    return (
      <div>
        <h1>Trip collab</h1>
        <div>
          <SearchLocation />
          <AddPrice />
          <AddCategory setActivities={this.setActivities}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
