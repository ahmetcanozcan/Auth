const mongoose = require('mongoose');

const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/adresimm';

async function connect() {

  try {
    await mongoose.connect(DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log('DB connection established successfully');
  } catch (err) {
    console.error('Can not connect to DB', err);
    console.log('Exiting app with code 1');
    process.exit(1);
  }

}

module.exports = { connect }