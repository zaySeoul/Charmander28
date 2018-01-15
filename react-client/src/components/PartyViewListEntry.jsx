import React from 'react';

let PartyViewListEntry = (props) => {
  return (
    <tr>
      <td> <a href={ props.item.url }><h3>{ props.item.name }</h3></a> </td>
      <td> <img src={props.item.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" /> </td>
    </tr>
  );
};

export default PartyViewListEntry;

// import React from 'react';
//
// let PartyViewListEntry = (props) => {
//   return (
//     <div className="col-sm-4">
//       <h3 className="title">{ props.item.name }</h3>
//       <img src={props.item.imageUrl.replace('/o.jpg', '/m.jpg')} alt="" /> <br/>
//       <a href={props.item.url }> Hello </a>
//     </div>
//   );
// };
//
// export default PartyViewListEntry;
