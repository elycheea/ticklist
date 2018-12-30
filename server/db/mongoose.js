const mongoose = require('mongoose');
const moment = require('moment');

const climbSchema = require('./climb.schema');

const Climb = mongoose.model('Climb', climbSchema);

mongoose.connect('mongodb://localhost/ticklist', {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongo');
});

// Rehydrate database first
const CLIMBS = [
  {
    name: 'Ace',
    grade: 'V5',
    crag: 'Rocktown',
    startDate: moment(new Date('Oct 22, 2016')),
    sentDate: moment(new Date('Mar 11, 2017')),
  },
  {
    name: 'Helicopter',
    grade: 'V6',
    crag: 'Rocktown',
    startDate: moment(new Date('Feb 25, 2017')),
    sentDate: moment(new Date('Feb 25, 2017')),
  },
  {
    name: 'Standard Variation',
    grade: 'V5',
    crag: 'Rocktown',
    startDate: moment(new Date('Feb 25, 2017')),
    sentDate: moment(new Date('Mar 4, 2017')),
  },
  {
    name: 'Isle of Beautiful Women',
    grade: 'V4',
    crag: 'Rocktown',
    startDate: moment(new Date('Oct 22, 2016')),
  },
];

// Rehydrate database
db.dropDatabase()
  .then(() => {
    CLIMBS.forEach((climb) => {
      const newClimb = new Climb(climb);
      newClimb.save();
    })
  });


module.exports = {
  db,
  Climb,
};