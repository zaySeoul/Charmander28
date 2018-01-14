import React from 'react';
import EatViewListEntry from './EatViewListEntry.jsx';
import PartyViewListEntry from './PartyViewListEntry.jsx';
import SleepViewListEntry from './PartyViewListEntry.jsx';
import ExploreViewListEntry from './PartyViewListEntry.jsx';

class TripView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Eat</a>
              <a className="nav-item nav-link active" href="#">Party</a>
              <a className="nav-item nav-link active" href="#">Sleep</a>
              <a className="nav-item nav-link active" href="#">Explore</a>
             </div>
          </div>
        </nav>
      <div className="container">
        <div className="row">
          {this.props.eat.map(item =>
            <EatViewListEntry key={this.props.eat.indexOf(item)} item={item} />
          )}
        </div>
        <div className="row">
          {this.props.party.map(item =>
            <PartyViewListEntry key={this.props.party.indexOf(item)} item={item} />
          )}
        </div>
        <div className="row">
          {this.props.sleep.map(item =>
            <SleepViewListEntry key={this.props.sleep.indexOf(item)} item={item} />
          )}
        </div>
        <div className="row">
          {this.props.explore.map(item =>
            <ExploreViewListEntry key={this.props.explore.indexOf(item)} item={item} />
          )}
        </div>
      </div>
      </div>
    );
  }
}

export default TripView;


<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav>
