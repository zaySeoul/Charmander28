import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchLocation from './components/SearchLocation.jsx';
import AddPrice from './components/AddPrice.jsx';
import Header from './components/navHeader.jsx';
import AddCategory from './components/AddCategory.jsx';
import axios from 'axios';
import App from './components/app.jsx';

class Index extends React.Component {


  render() {
    // console.log('new state', this.state.activities);
    return (
      <div>
        <App />
      </div>
    );
  }
}


ReactDOM.render(<Index />, document.getElementById('app'));
