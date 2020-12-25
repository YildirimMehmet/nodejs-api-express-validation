'use strict';

const express = require('express');
const users = require('./users');

const apiRouter = () => {
    const routes = express.Router();
    const usersRouter = users();
    routes.use('/users', usersRouter);
    return routes;
};

module.exports = apiRouter;