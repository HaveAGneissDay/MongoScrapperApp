// This gets the headline

//Required Packages 

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },

    url: {
        type: String,
        required: false
    },

    date: {
        type: String
    },
    description: {
        type: String
    }

});

var Headline = mongoose.model("Article", HeadlineSchema);

module.exports = Headline;