const express = require('express');
const app = express();
const morgan = require('morgan');

//setings
app.set('port', process.env.PORT || 3001);
app.set('json spaces',2);
//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//ROUTES
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

// starting the server
app.listen(app.get('port'),() => {
    console.log(`Server on port ${ app.get('port')}`);
});