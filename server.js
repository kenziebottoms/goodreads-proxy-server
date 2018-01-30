'use strict'

const request = require('request');

const express = require('express');
const app = express();

const port = process.env.PORT || 6060;
app.set('port', port);

const apiUrl = "https://www.goodreads.com";

// MIDDLEWARE (transform stream)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get(`/api/*`, (req, res) => {
    let apiCall = req.url.slice('/api/'.length)
    let apiReq = `${apiUrl}/${apiCall}`
    request.get(apiReq, (err, _, body) => {
        res.send(body)
    });
});

app.listen(port, () =>
    console.log(`Listening on port: ${port}`)
);