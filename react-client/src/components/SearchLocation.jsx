import React from 'react';

class SearchLocation extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      location: ''
    };
  }

  handleInputChange (e) {
    this.setState({
      location: e.target.value
    })
    console.log('input data',this.state.location);
  }

  handleReturnKey (e) {
    if (e.key === 'Enter') {
      this.props.searchLocation(this.state.location);
      console.log('return key function',this.state.location);
    }
  }

  handleClick (e) {
    e.preventDefault();
    this.props.searchLocation(this.target.name);
  }

  render () {
    return (
      <div className="search-bar destination">
         <input
           className="form-control"
           type="text"
           value={this.state.value}
           onChange={this.handleInputChange.bind(this)}
         />
      </div>
    )
  }
}

export default SearchLocation;