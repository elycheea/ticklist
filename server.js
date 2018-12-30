const express = require('express');
const bodyParser = require('body-parser');

const db = require('./server/db');

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/build`));

app.get('/api/climbs', (req, res) => {
  const climbs = db.getClimbs();
  res.send(climbs)
});

app.post('/api/climbs', (req, res) => {
  const newClimb = req.body;
  const updatedClimbs = db.addClimb(newClimb);
  res.send(updatedClimbs);
});

app.delete('/api/climbs', (req, res) => {
  const { indexToDelete } = req.body;
  const updatedClimbs = db.removeClimb(indexToDelete);
  res.send(updatedClimbs);
})

let port = process.env.port || 3001;
app.listen(port, () => console.log(`Now listening on ${port}`));
