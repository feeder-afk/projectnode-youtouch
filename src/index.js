

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();
app.use( morgan('dev') );

app.set('port', process.env.PORT || 3000);
app.use( express.urlencoded( {extended: false} ) );
app.use( express.json() );

//Seteamos las urls de la api
app.use( '/api/post', require('./routes/post-routes') );
app.use( '/api/user', require('./routes/user-routes') );

//Archivos del front ent
app.use( express.static( path.join( __dirname, 'public' ) ) );

//para cualquier otra peticion que sea escuchada por el front end
app.get('*', (req, res) => res.sendFile( path.join( __dirname, 'public', 'index.html')));

app.listen( app.get('port'), () => {
    console.log("servidor funcionando en el puerto " + app.get('port'));
});