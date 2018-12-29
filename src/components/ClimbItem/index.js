import React, { Component } from 'react';
// import _ from 'lodash';
// import date from '../../utils/date';
import moment from 'moment';

import './ClimbItem.css';

class ClimbItem extends Component {
  render() {
    return (
      <li className="climb-row" id="climb-{this.props.index}">
        <input type="checkbox" checked={this.props.climb.sent} onChange={this.props.toggleSent}/>

        <div className="climb__info">
          {this.props.climb.name}
          
          {this.props.climb.grade &&
            <span>({this.props.climb.grade})</span>
          }
        </div>

        <div className="climb__dates">
          {this.props.climb.startDate &&
            <span>{moment(this.props.climb.startDate).format('MMM D, YYYY')}</span>
          }

          {this.props.climb.notes &&
            <p>{this.props.climb.notes}</p>
          }
        </div>

        <span className="action--remove" onClick={this.props.removeClimb}>&times;</span>
      </li>
    );
  }
}

export default ClimbItem;
