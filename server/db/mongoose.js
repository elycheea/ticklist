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

module.exports = {
  db,
  Climb,
};