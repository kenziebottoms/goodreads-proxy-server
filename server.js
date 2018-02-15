'use strict'

const request = require('request');

const express = require('express');
const app = express();

const port = process.env.PORT || 6060;
app.set('port', port);

const grUrl = "https://www.goodreads.com";
const mmUrl = "http://api.musixmatch.com/ws/1.1";

// MIDDLEWARE (transform stream)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get(`/gr/*`, (req, res) => {
    let apiCall = req.url.slice('/gr/'.length)
    let apiReq = `${grUrl}/${apiCall}`
    request.get(apiReq, (err, _, body) => {
        res.send(body)
    });
});

app.get(`/mm/*`, (req, res) => {
    let apiCall = req.url.slice('/mm/'.length)
    let apiReq = `${mmUrl}/${apiCall}`
    request.get(apiReq, (err, _, body) => {
        res.send(body)
    });
});

app.listen(port, () =>
    console.log(`Listening on port: ${port}`)
);