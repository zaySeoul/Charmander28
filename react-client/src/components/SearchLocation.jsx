import React from 'react';

class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSetDestination = this.onSetDestination.bind(this);
    this.handleReturnKey = this.handleReturnKey.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  handleReturnKey(e) {
    if (e.key === 'Enter') {
      this.props.changeLoc(this.state.location);
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.searchLocation(this.target.name);
  }

  onSetDestination() {
    this.props.changeLoc(this.state.location);
  }

  render() {
    return (
      <div className="search-bar destination">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          placeholder="What's your destination"
          onChange={this.handleInputChange}
          onKeyPress={this.handleReturnKey}
          onBlur={this.onSetDestination}

        />
      </div>
    );
  }
}

export default SearchLocation;