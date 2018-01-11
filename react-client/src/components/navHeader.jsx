import React from 'react';


export class Header extends React.Component{
  render () {
    return (
      <nav>
        <div>
          <div>
            <ul className="nav">
              <li><a href="#"> About Us</a></li>
            </ul>
          </div>
        </div> 
      </nav>
    )
  }
}