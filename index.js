var SayAbel  = require('sayabel')
var sayabelInstance = new SayAbel(true);
const express = require('express');
var app = express();
const routes = require('./routes');

app.use('/', routes);

app.listen(8080, "localhost", () => {
    console.log("Listening on port 8080...");
})