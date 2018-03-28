// Adding a note 

const mongoose = require('mongoose');


var Schema = mongoose.noteSchema;

var noteSchema = new Schema({
    text: {
        type: String,
        required: true
    },

    created_date: {
        type: String
    }
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;