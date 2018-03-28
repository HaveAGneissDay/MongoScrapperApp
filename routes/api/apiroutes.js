//API routes
//Need packages
// dependencies
const express = require('express');
const router = express.Router();
//we combined article and note into one file
const Combined = require('../models/index.js');

const scraper = require('../scripts/scrape.js');

app.get('/articles', function (req, res) {
    Combined.find({}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            res.json(doc);
        }
    });
});

app.get('/articles/:id', function (req, res) {
    Combined.findOne({ '_id': req.params.id })
        .populate('note')
        .exec(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.json(doc);
            }
        });
});

app.post('/articles/:id', function (req, res) {
    var newNote = new Note(req.body);

    newNote.save(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            Combined.findOneAndUpdate({ '_id': req.params.id }, { 'note': doc._id })
                .exec(function (err, doc) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(doc);
                    }
                });

        }
    });
});