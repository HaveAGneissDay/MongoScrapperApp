// Running everything from here

const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

//Make sure the app is listening
app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});

//Make the request to BBC
request("http://www.bbc.com/news", function (error, response, html) {
    if (error) {
        console.log("ERROR: " + error);

    } else {
        // console.log(response);
        // Load the body of the HTML into cheerio
        var $ = cheerio.load(html);
        
        var numArticles = 0;
        var results = [];

        $("a.gs-c-promo-heading").each(function (i, element) {
            var title = $(element).children().text();
            var url = "bbc.com" + $(element).attr("href");;
            var date = $(element).find("li").attr("gs-c-timestamp");
            var description = $(element).children().text().trim();

            var articleData = {
                "index": i,
                "title" : title,
                "url" : url,
                "date" : date,
                "description" : description
            }

            results.push(articleData);
        })
        console.log(results);
    }
});

// // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// // Set mongoose to leverage built in JavaScript ES6 Promises
// // Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, {
//     useMongoClient: true
// });