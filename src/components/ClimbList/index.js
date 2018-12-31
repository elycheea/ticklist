import React, { Component } from 'react';
import ClimbItem from '../ClimbItem';
// import _ from 'lodash';

class ClimbList extends Component {
  render() {
    return (
      <div>
        <h1>A list of climbs</h1>
        <ul>
          {this.props.climbs.map((climb, i) => (
            <ClimbItem
              key={i}
              index={i}
              climb={climb}
              toggleSent={() => this.props.toggleSent(i)}
              removeClimb={() => this.props.removeClimb(climb._id)} 
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ClimbList;
