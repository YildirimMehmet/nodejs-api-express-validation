'use strict';

const startServer = require('./src/api/server');

const start = async () => {
    await startServer();
};

start();