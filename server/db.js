const mongoose = require('mongoose');
const dbPath = process.env.MONGODB_URI;
mongoose.connect(dbPath);
const db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error:', err.message);
});

db.once('open', function callback () {
  console.log(`DB url ${dbPath}`);
});