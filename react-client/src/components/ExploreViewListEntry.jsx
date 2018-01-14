import React from 'react';

let ExploreViewListEntry = (props) => {
  return (
    <div className="col-sm-4">
      <h3 className="title">{ props.item.name }</h3>
      <img src={props.item.imageUrl} alt="" /> <br/>
      <a href={props.item.url }> {props.item.name} </a>
    </div>
  );
};

export default ExploreViewListEntry;