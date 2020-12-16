const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const{ HOST, DATABASE} = process.env;
const MONGODB_URI = `mongodb://${HOST}/${DATABASE}`

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
