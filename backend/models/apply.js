const mongoose = require('mongoose');

const applySchema = new mongoose.Schema({
  posterEmail: { type: String },
  applyEmail: { type: String },
  projectId: { type: String, required: true }
});

module.exports = mongoose.model('Apply', applySchema); 
