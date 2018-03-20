// Running everything from here

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App is listening on PORT" + PORT);
});