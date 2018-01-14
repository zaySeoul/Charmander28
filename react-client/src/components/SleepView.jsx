import React from 'react';
import SleepViewListEntry from './SleepViewListEntry.jsx';

let SleepView = (props) => {

  return (
    <div className="container">
      <div className="row">
        {props.sleep.map(item =>
          <SleepViewListEntry key={props.sleep.indexOf(item)} item={item} /> )}
      </div>
    </div>
  );
};


export default SleepView;
