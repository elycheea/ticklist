import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClimbList from './components/ClimbList';
import _ from 'lodash';

const CLIMBS = [{
    name: 'Ace',
    sent: true
  },
  {
    name: 'Helicopter',
    sent: true
  },
  {
    name: 'Standard Variation',
    sent: true
  },
];

class App extends Component {
  state = {
    climbs: CLIMBS,
    newClimb: ''
  }

  handleChange = (event) => {
    const newClimb = event.target.value;
    this.setState({
      newClimb
    });
  }

  handleClick = () => {
    const climbs = _.cloneDeep(this.state.climbs);
    climbs.push({
      name: this.state.newClimb,
      sent: false
    });

    this.setState({
      climbs,
      newClimb: ''
    });
  }

  toggleSent = (index) => {
    const climbs = _.cloneDeep(this.state.climbs);
    climbs[index].sent = !climbs[index].sent;

    this.setState({ climbs });
  }
  
  render() {
    return (
      <div className="App">
        <ClimbList climbs={this.state.climbs} toggleSent={this.toggleSent}/>

        <form type="submit" onSubmit={event => event.preventDefault()}>
          <input type="text" placeholder="Climb name" value={this.state.newClimb} onChange={this.handleChange}/>
          <button type="submit" onClick={this.handleClick}>Add climb</button>
        </form>
      </div>
    );
  }
}

export default App;
