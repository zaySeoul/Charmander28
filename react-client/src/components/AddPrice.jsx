import React from 'react';

class AddPrice extends React.Component {
  constructor (props) {
    super (props);
       this.state = {
        price: '$'
       };
    }

  budget (e) {
    this.setState({
      price: '$'
    })
    console.log('price range', this.state.price);
  }

  someBills (e) {
    this.setState({
      price: '$$'
    })
    console.log('price range', this.state.price);
  }

  playMoney (e) {
    this.setState({
      price: '$$$'
    })
    console.log('price range', this.state.price);
  }

  ballin (e) {
    this.setState({
      price: '$$$$'
    })
    console.log('price range', this.state.price);
  }

  render () {
    return (
      <div>
        <button onClick={this.budget.bind(this)}>Budget</button>
        <button onClick={this.someBills.bind(this)}>Got Bills</button>
        <button onClick={this.playMoney.bind(this)}>Play Money</button>
        <button onClick={this.ballin.bind(this)}>I'm Ballin</button>
      </div>

    )
  }
}

export default AddPrice;