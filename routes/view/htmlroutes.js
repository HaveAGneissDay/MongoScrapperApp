//This file puts everything into view
//Need packages
const express = require('express');
const router = express.Router();
//we combined article and note into one file
const Combined = require('../models/index.js');

const scraper = require('../scripts/scrape.js');