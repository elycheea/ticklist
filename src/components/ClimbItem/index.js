import React, { Component } from 'react';
import _ from 'lodash';
// import date from '../../utils/date';
import moment from 'moment';

class ClimbItem extends Component {
  render() {
    return (
      <li id="climb-{this.props.index}">
        {this.props.climb.name}
        <input type="checkbox" checked={this.props.climb.sent} onChange={this.props.toggleSent}/>
        <span onClick={this.props.removeClimb}>&times;</span>

        {this.props.climb.startDate &&
          <span>{moment(this.props.climb.startDate).format('MMM D, YYYY')}</span>
        }

        {this.props.climb.notes &&
          <p>{this.props.climb.notes}</p>
        }
      </li>
    );
  }
}

export default ClimbItem;
