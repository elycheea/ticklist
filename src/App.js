import React, { Component } from 'react';
import './App.css';
import ClimbList from './components/ClimbList';
import _ from 'lodash';
import moment from 'moment';

const CLIMBS = [{
    name: 'Ace',
    grade: 'V5',
    startDate: new Date('Oct 22, 2016'),
    sentDate: new Date('Mar 11, 2017'),
  },
  {
    name: 'Helicopter',
    grade: 'V6',
    startDate: new Date('Feb 25, 2017'),
    sentDate: new Date('Feb 25, 2017'),
  },
  {
    name: 'Standard Variation',
    grade: 'V5',
    startDate: new Date('Feb 25, 2017'),
    sentDate: new Date('Mar 4, 2017'),
  },
  {
    name: 'Isle of Beautiful Women',
    grade: 'V4',
    startDate: new Date('Oct 22, 2016'),
  },
];


class App extends Component {
  state = {
    climbs: CLIMBS,
    newClimbName: '',
    newClimbGrade: '',
    newClimbStart: '',
    newClimbSent: '',
    newClimbNotes: '',
    showDetails: false
  }

  handleChange = (changedKey, event) => {
    const newClimbValue = event.target.value;
    this.setState({
      [changedKey]: newClimbValue
    });
  }

  handleClick = () => {
    const climbs = _.cloneDeep(this.state.climbs);

    if (this.state.newClimbName && this.state.newClimbStart) {
      climbs.push({
        name: this.state.newClimbName,
        grade: this.state.newClimbGrade,
        startDate: moment(this.state.newClimbStart),
        sentDate: moment(this.state.newClimbSent),
        notes: this.state.newClimbNotes
      });
    } else if (this.state.newClimbName) {
      climbs.push({
        name: this.state.newClimbName,
        grade: this.state.newClimbGrade,
        startDate: null,
        sentDate: null,
        notes: this.state.newClimbNotes
      });
    }

    this.setState({
      climbs,
      newClimbName: '',
      newClimbGrade: '',
      newClimbStart: '',
      newClimbSent: '',
      newClimbNotes: ''
    });
  }

  removeClimb = (index) => {
    const climbs = _.cloneDeep(this.state.climbs);
    climbs.splice(index, 1);

    this.setState({ climbs });
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
