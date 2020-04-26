const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const MONGODB_URI = 'mongodb://localhost:27017/notes-app'

// Connect MongoDB at default port 27017.
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
