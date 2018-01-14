import React from 'react';
import ExploreViewListEntry from './ExploreViewListEntry.jsx';

let ExploreView = (props) => {

  return (
    <div className="container">
      <div className="row">
        {props.explore.map(item =>
          <ExploreViewListEntry key={props.explore.indexOf(item)} item={item} /> )}
      </div>
    </div>
  );
};


export default ExploreView;
