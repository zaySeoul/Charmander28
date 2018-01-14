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
    );
  }
}

export default TripView;
