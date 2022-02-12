const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/example';

mongoose.connect( URI )
    .then( db => console.log( 'DB IS ON' ) )
    .catch( err => console.error(err) );

module.exports = mongoose;

