const express = require('express');
const routes = require('./routes');
const path = require('path');
const pug = require('pug');
var app = express();

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));
app.use('/', routes);

app.listen(8080, "localhost", () => {
    console.log("Listening on port 8080...");
})