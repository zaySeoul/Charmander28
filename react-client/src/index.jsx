import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchLocation from './components/SearchLocation.jsx';
import AddPrice from './components/AddPrice.jsx';
import Header from './components/navHeader.jsx';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Trip collab</h1>
        <div>
          <SearchLocation/>
          <AddPrice/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
