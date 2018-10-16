import React, { Component } from 'react';
import _ from 'lodash';

class ClimbItem extends Component {
  render() {
    return (
      <li id="climb-{this.props.index}">
        {this.props.climb.name}
        <input type="checkbox" checked={this.props.climb.sent} onChange={this.props.toggleSent}/>
        <span onClick={this.props.removeClimb}>&times;</span>

        {this.props.climb.startDate &&
          <span>{this.props.climb.startDate.toString()}</span>
        }
      </li>
    );
  }
}

export default ClimbItem;