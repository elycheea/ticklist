import React, { Component } from 'react';
// import _ from 'lodash';
// import date from '../../utils/date';
import moment from 'moment';

import './ClimbItem.css';

class ClimbItem extends Component {
  render() {
    return (
      <details className="climb-row" id={`climb-${this.props.index}`}>
        <summary className="climb__summary">
          {this.props.climb.sentDate ? (
            <span>✓</span>
          ) : (
            <span>🤷🏻‍♀️</span>
          )}

          <div className="climb__info">
            {this.props.climb.name}
            
            {this.props.climb.grade && (
              <span>({this.props.climb.grade})</span>
            )}

            {this.props.climb.crag && (
              <span className="climb-location">{this.props.climb.crag}</span>
            )}
          </div>

          <div className="climb__dates">
            {this.props.climb.startDate && (
              <span className="climb-date">{moment(this.props.climb.startDate).format('MMM D, YYYY')}</span>
            )}

            {this.props.climb.sentDate && (
              <span className="climb-date">{moment(this.props.climb.sentDate).format('MMM D, YYYY')}</span>
            )}
          </div>
        </summary>

        <div className="climb__details">
          {this.props.climb.notes && (
            <p>{this.props.climb.notes}</p>
          )}

          <span className="action--remove" onClick={this.props.removeClimb}>&times;</span>
        </div>
      </details>
    );
  }
}

export default ClimbItem;
