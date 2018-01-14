import React from 'react';
import PartyViewListEntry from './PartyViewListEntry.jsx';

let PartyView = (props) => {

  return (
    <div className="container">
      <div className="row">
        {props.party.map(item =>
          <PartyViewListEntry key={props.party.indexOf(item)} item={item} /> )}
      </div>
    </div>
  );
};


export default PartyView;
