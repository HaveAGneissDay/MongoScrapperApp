//This file puts everything into view
//Need packages
const path = require('path');
const express = require('express');
const router = express.Router();
//we combined article and note into one file
const Combined = require('../models/index.js');

const scraper = require('../scripts/scrape.js');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "views/index.html"));
    });

    app.get("/saved/all", function (req, res) {
        res.sendFile(path.join(__dirname, "views/saved.html"));
    });

    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "views/index.html"));
    });
}