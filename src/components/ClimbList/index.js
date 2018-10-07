import React, { Component } from 'react';
import _ from 'lodash';

class ClimbList extends Component {
  render() {
    return (
      <div>
        <h1>A list of climbs</h1>
        <ul>
          {this.props.climbs.map((climb, i) => (
            <li key={i}>
              {climb.name}
              <input type="checkbox" checked={climb.sent} onClick={() => this.props.toggleSent(i)}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClimbList;
