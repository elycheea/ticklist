const moment = require('moment');

const { db, Climb } = require('./mongoose');

const getClimbs = () => Climb.find();

const addClimb = (climb) => {
  const newClimb = new Climb(climb);
  return newClimb.save()
    .then(() => Climb.find());
};

const removeClimb = (idToDelete) => Climb.deleteOne({ _id: idToDelete })
  .then(() => Climb.find());

const rehydrateDatabase = () => {
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
  return db.dropDatabase()
    .then(() => {
      CLIMBS.forEach((climb) => {
        const newClimb = new Climb(climb);
        newClimb.save();
      })
    });
};

module.exports = {
  getClimbs,
  addClimb,
  removeClimb,
  rehydrateDatabase
};
