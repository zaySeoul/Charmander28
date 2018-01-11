import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AddCategory from '../components/AddCategory.jsx';

class Index extends React.Component {
  constructor(props) {
    console.log('index');
    super(props);
  }
  render() {
    return (<div>
      <h1>Trip collab</h1>
      <AddCategory />
    </div>);
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
