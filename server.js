// Running everything from here

const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;


// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars as the view engine
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them
const routes = require('./routes/api/apiroutes.js');

app.use('index.js', routes);

router.use(api);
router.use(views);


//Make sure the app is listening
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});



// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connect mongoose to our database
mongoose.connect(db, function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('mongoose connection is successful');
    }
});
// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    useMongoClient: true
});