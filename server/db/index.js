const CLIMBS = [
  {
    name: 'Ace',
    grade: 'V5',
    crag: 'Rocktown',
    startDate: new Date('Oct 22, 2016'),
    sentDate: new Date('Mar 11, 2017'),
  },
  {
    name: 'Helicopter',
    grade: 'V6',
    crag: 'Rocktown',
    startDate: new Date('Feb 25, 2017'),
    sentDate: new Date('Feb 25, 2017'),
  },
  {
    name: 'Standard Variation',
    grade: 'V5',
    crag: 'Rocktown',
    startDate: new Date('Feb 25, 2017'),
    sentDate: new Date('Mar 4, 2017'),
  },
  {
    name: 'Isle of Beautiful Women',
    grade: 'V4',
    crag: 'Rocktown',
    startDate: new Date('Oct 22, 2016'),
  },
];

const getClimbs = () => new Promise((resolve) => {
  return resolve(CLIMBS);
});

const addClimb = (newClimb) => new Promise((resolve) => {
  CLIMBS.push(newClimb);
  return resolve(CLIMBS);
});

const removeClimb = (indexToDelete) => new Promise((resolve) => {
  CLIMBS.splice(indexToDelete, 1);
  return resolve(CLIMBS);
});

module.exports = {
  getClimbs,
  addClimb,
  removeClimb
};
