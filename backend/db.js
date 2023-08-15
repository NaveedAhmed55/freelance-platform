// db.js
const mongoose = require('mongoose');

const databaseURL = 'mongodb://127.0.0.1:27017';

mongoose.connect(databaseURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'student-freelance',
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
