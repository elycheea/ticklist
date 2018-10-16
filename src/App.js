import React, { Component } from 'react';
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
    newClimb: '',
    newClimbStart: '',
    showDetails: false
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
      sent: false,
      startDate: new Date(this.state.newClimbStart)
    });

    this.setState({
      climbs,
      newClimb: '',
      newClimbStart: ''
    });
  }

  removeClimb = (index) => {
    const climbs = _.cloneDeep(this.state.climbs);
    climbs.splice(index, 1);

    this.setState({ climbs });
  }

  toggleSent = (index) => {
    const climbs = _.cloneDeep(this.state.climbs);
    climbs[index].sent = !climbs[index].sent;

    this.setState({ climbs });
  }

  addDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  }

  handleDate = (event) => {
    const newClimbStart = event.target.value;
    this.setState({
      newClimbStart
    });
  }

  
  render() {
    const showDetails = this.state.showDetails;

    return (
      <div className="App">
        <ClimbList climbs={this.state.climbs} toggleSent={this.toggleSent} removeClimb={this.removeClimb}/>

        <form type="submit" onSubmit={event => event.preventDefault()}>
          <input type="text" placeholder="Climb name" value={this.state.newClimb} onChange={this.handleChange}/>

          <label htmlFor ="climb-details">
            <input id="climb-details" type="checkbox" onChange={this.addDetails}/> add more details
          </label>

          {showDetails &&
            <fieldset >
              <legend>Add more details</legend>

              <label htmlFor="start-date">
                Date started
                <input id="start-date" type="date" value={this.state.newClimbStart} onChange={this.handleDate}/>
              </label>
            </fieldset>
          }
          <button type="submit" onClick={this.handleClick}>Add climb</button>
        </form>
      </div>
    );
  }
}

export default App;
