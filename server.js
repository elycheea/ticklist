const express = require('express');
const bodyParser = require('body-parser');

const db = require('./server/db');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/build`));

app.get('/api/climbs', (req, res) => {
  db.getClimbs()
    .then((climbs) => {
      res.send(climbs)
    });
});

app.post('/api/climbs', (req, res) => {
  const newClimb = req.body;
  db.addClimb(newClimb)
    .then((updatedClimbs) => {
      res.send(updatedClimbs);
    });
});

app.delete('/api/climbs', (req, res) => {
  const { idToDelete } = req.body;
  db.removeClimb(idToDelete)
    .then((updatedClimbs) => {
      res.send(updatedClimbs);
    });
});

app.put('/api/rehydrate', (req, res) => {
  db.rehydrateDatabase()
    .then(() => res.sendStatus(200));
});

let port = process.env.port || 3001;
app.listen(port, () => console.log(`Now listening on ${port}`));
