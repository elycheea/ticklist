import React, { Component } from 'react';
import _ from 'lodash';

const CLIMBS = [
  { name: 'Ace', sent: true },
  { name: 'Helicopter', sent: true },
  { name: 'Standard Deviation', sent: true },
];

class ClimbList extends Component {
  state = {
    climbs: CLIMBS,
    newClimb: '' 
  }

  handleClick = () => {
    const climbs = _.cloneDeep(this.state.climbs);
    climbs.push({ name: this.state.newClimb, sent: false });

    this.setState({ climbs, newClimb: ''});
  }

  handleChange = (event) => {
    const newClimb = event.target.value;
    this.setState({ newClimb });
  }

  toggleSent = (index) => {
    const climbs = _.cloneDeep(this.state.climbs);
    climbs[index].sent = !climbs[index].sent;

    this.setState({ climbs });
  }

  render() {
    return (
      <div>
        <h1>A list of climbs</h1>
        <ul>
          {this.state.climbs.map((climb, i) => (
            <li key={i}>
              {climb.name}
              <input type="checkbox" checked={climb.sent} onClick={() => this.toggleSent(i)}/>
            </li>
          ))}
        </ul>

        <input type="text" placeholder="Climb name" value={this.state.newClimb} onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleClick}>Add climb</button>
      </div>
    );
  }
}

export default ClimbList;
