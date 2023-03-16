const mongoose  = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const dbConnect = () => {
  mongoose
    .connect(db)
    .then(() => {
      console.log('Database connection success');
    })
    .catch((err) => {
      console.error('Database connection error');
    });
}

module.exports = dbConnect;