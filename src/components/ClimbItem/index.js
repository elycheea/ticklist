import React, { Component } from 'react';
import _ from 'lodash';

class ClimbItem extends Component {
  render() {
    return (
      <li id="climb-{this.props.index}">
        {this.props.climb.name}
        <input type="checkbox" checked={this.props.climb.sent} onClick={this.props.toggleSent}/>
      </li>
    );
  }
}

export default ClimbItem;
