const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const routes = require('./routes/index.routes');
const bodyParser = require('body-parser');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, "views"))
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: app.get(path.join('views','layout')),
    partialsDir: app.get(path.join('views','partials')),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('dev'));



// Global Variables

// Routes
app.use('/',routes());

// Statics files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;