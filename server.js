const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/build`));

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

app.get('/api/climbs', (req, res) => {
  res.send(CLIMBS)
});

app.post('/api/climbs', (req, res) => {
  const newClimb = req.body;
  CLIMBS.push(newClimb);
  res.send(CLIMBS);
});

app.delete('/api/climbs', (req, res) => {
  const { indexToDelete } = req.body;
  CLIMBS.splice(indexToDelete, 1);
  res.send(CLIMBS);
})

let port = process.env.port || 3001;
app.listen(port, () => console.log(`Now listening on ${port}`));
