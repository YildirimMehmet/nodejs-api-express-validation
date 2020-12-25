'use strict';

const createServer = async () => {

    var express = require('express');
    const bodyParser = require('body-parser');
    const routes = require('./routes');
    const { ValidationError } = require('express-validation');

    var app = express();
    var PORT = 3000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api', routes());

    app.use(function (err, req, res, next) {
        if (err instanceof ValidationError) {
            return res.status(err.statusCode).json(err)
        }
        return res.status(500).json(err)
    })

    app.listen(PORT, function (err) {
        if (err) console.log(err);
        console.log("Server listening: ", "http://localhost:" + PORT + "/api");
    });

}

module.exports = createServer;