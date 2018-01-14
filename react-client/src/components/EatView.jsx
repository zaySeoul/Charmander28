import React from 'react';
import EatViewListEntry from './EatViewListEntry.jsx';

let EatView = (props) => {

  return (
    <div className="container">
    {console.log('this is the props', props)}
      <div className="row">
        {props.eat.map(item =>
          <EatViewListEntry key={props.eat.indexOf(item)} item={item} />
        ) }
      </div>
    </div>
  );
};


export default EatView;
