import React, { Component } from 'react';
// import _ from 'lodash';
import moment from 'moment';

import api from './api';
import './App.css';
import ClimbList from './components/ClimbList';

class App extends Component {
  state = {
    climbs: [],
    newClimbName: '',
    newClimbGrade: '',
    newClimbLocation: '',
    newClimbStart: '',
    newClimbSent: '',
    newClimbNotes: '',
    showDetails: false
  }

  componentDidMount() {
    api.getClimbs()
      .then((climbs) => {
        this.setState({ climbs })
      });
  }

  handleChange = (changedKey, event) => {
    const newClimbValue = event.target.value;
    this.setState({
      [changedKey]: newClimbValue
    });
  }

  handleClick = () => {
    let newClimb;

    if (this.state.newClimbName && this.state.newClimbStart) {
      newClimb = {
        name: this.state.newClimbName,
        grade: this.state.newClimbGrade,
        crag: this.state.newClimbLocation,
        startDate: moment(this.state.newClimbStart),
        sentDate: moment(this.state.newClimbSent),
        notes: this.state.newClimbNotes
      }
    } else if (this.state.newClimbName) {
      newClimb = {
        name: this.state.newClimbName,
        grade: this.state.newClimbGrade,
        crag: this.state.newClimbLocation,
        startDate: null,
        sentDate: null,
        notes: this.state.newClimbNotes
      };
    }

    if (newClimb) {
      api.addClimb(newClimb)
        .then((climbs) => {
          this.setState({
            climbs,
            newClimbName: '',
            newClimbGrade: '',
            newClimbLocation: '',
            newClimbStart: '',
            newClimbSent: '',
            newClimbNotes: '',
          });
        });
    }
  }

  removeClimb = (idToDelete) => {
    api.removeClimb(idToDelete)
      .then((climbs) => {
        this.setState({ climbs });
      });
  }

  addDetails = () => {
    this.setState({ showDetails: !this.state.showDetails });
  }
  
  render() {
    const showDetails = this.state.showDetails;

    return (
      <div className="App">
        <ClimbList climbs={this.state.climbs} toggleSent={this.toggleSent} removeClimb={this.removeClimb}/>

        <form onSubmit={event => event.preventDefault()}>
          <input type="text" placeholder="Climb name" value={this.state.newClimbName} onChange={(event) => this.handleChange('newClimbName', event, )}/>

          <label htmlFor="climb-grade">
            Grade
            <input type="text" placeholder="V0... +/-" value={this.state.newClimbGrade} onChange={(event) => this.handleChange('newClimbGrade', event)} id="climb-grade" />
          </label>

          <label htmlFor ="climb-details">
            <input id="climb-details" type="checkbox" onChange={this.addDetails}/> add more details
          </label>

          {showDetails &&
            <fieldset >
              <legend>Add more details</legend>

              <label htmlFor="start-date">
                Date started
                <input id="start-date" type="date" value={this.state.newClimbStart} onChange={(event) => this.handleChange('newClimbStart', event)}/>
              </label>

              <label htmlFor="sent-date">
                Date sent
                <input id="start-date" type="date" value={this.state.newClimbSent} onChange={(event) => this.handleChange('newClimbSent', event)}/>
              </label>

              <label htmlFor="crag-name">
                Crag name
                <input id="crag-name" type="text" value={this.state.newClimbLocation} onChange={(event) => this.handleChange('newClimbLocation', event)}/>
              </label>

              <label htmlFor="notes">
                Notes
                <textarea id="notes" value={this.state.newClimbNotes} onChange={(event) => this.handleChange('newClimbNotes', event)}/>
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
