const express = require('express');
const app = express();
const config = require('../../config.json')[app.get('env')];

/**
 * gets host server
 */
exports.host = function (service) {
    switch (service) {
        case "curation":
            return config.curation;
        case "geo":
            return config.geo;
    }
    return null;
}
/**
 * gets error handler options - log exception
 */
exports.logExceptions = config.errorHandlerOptions.dumpExceptions;

/**
 * gets error handler options - show stack trace
 */
exports.showStackTrace = config.errorHandlerOptions.showStack;