const express = require('express');
const path = require('path');
const morgan = require('morgan');
//handlebars
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
//End handlebars
const bodyParser = require('body-parser');

const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, "views"))

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:  path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    handlebars : allowInsecurePrototypeAccess(Handlebars)
}));

app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());


// Global Variables
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    next();
});

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Statics files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;