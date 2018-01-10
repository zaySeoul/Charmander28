import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data
    };
  }
  render() {
    return (<div>
      <h1>Trip collab</h1>
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
