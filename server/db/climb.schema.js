const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const climbSchema = new Schema({
  name: String,
  grade: String,
  crag: String,
  startDate: Date,
  sentDate: Date,
  notes: String
});

module.exports = climbSchema;
