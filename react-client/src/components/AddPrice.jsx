import React from 'react';

class AddPrice extends React.Component {
  constructor (props) {
    super (props);
       this.state = {
        price: ''
       };
    }

  priceHandler (e) {
    this.setState({
      price: e.target.value
    });
  }

  render () {
    return (
      <div>
        <label>
          <input type="radio" name="price" value="$" onClick={() => {this.priceHandler.bind(this)}}/>$
        </label>
        <label>
          <input type="radio" name="price" value="$$" onClick={() => {this.priceHandler.bind(this)}}/>$$
        </label>
        <label>
          <input type="radio" name="price" value="$$$" onClick={() => {this.priceHandler.bind(this)}}/>$$$
        </label>
        <label>
          <input type="radio" name="price" value="$$$$" onClick={() => {this.priceHandler.bind(this)}}/>$$$$
        </label>
      </div>

    )
  }
}

export default AddPrice;