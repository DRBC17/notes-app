const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, "views"))


// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('dev'));



// Global Variables

// Routes
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Statics files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;