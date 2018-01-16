import React from 'react';

let SleepViewListEntry = (props) => {
  return (
    <div className="col-sm-4">
      <h3 className="title">{ props.item.name }</h3>
      <img src={props.item.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" /> <br/>
      <a href={props.item.url }> Check it out </a>
    </div>
  );
};

export default SleepViewListEntry;