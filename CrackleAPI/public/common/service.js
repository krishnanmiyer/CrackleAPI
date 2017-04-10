var http = require("http");
var https = require("https");
var config = require('./config.js');

/**
 * get:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
module.exports.get = function (req, service, url, onResult) {
    console.log("rest::getJSON");

    var options = this.options(req, service, url);

    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function (res) {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function () {
            var obj = eval("(" + output + ")");
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function (err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

/**
 * post: post a JSON object to a REST service
 *
 * @param options
 * @param callback: callback to pass the results JSON object(s) back
 */
module.exports.post = function (req, service, url, data, onResult) {
    console.log("rest::postJSON");

    var options = this.options(req, service, url);
    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function (res) {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function () {
            console.log('end: ' + output);
            var obj = eval("(" + output + ")");
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function (err) {
        console.log('error: ' + err.message);
    });

    req.write(JSON.stringify(data));
    req.end();
};

/**
 * deleteJSON: send a delete REST request with an id to delete
 *
 * @param options: http server options object
 * @param callback: callback to pass the results JSON object(s) back
 */
module.exports.delete = function (req, service, url, onResult) {
    console.log("rest::deleteJSON");

    var options = this.options(req, service, url);
    var prot = options.port == 443 ? https : http;
    var req = prot.request(options, function (res) {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function () {
            var obj = eval("(" + output + ")");
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function (err) {
        // res.send('error: ' + err.message);
    });

    req.end();
};

/**
 * getJSON:  REST get request returning JSON object(s)
 * @param options: http options object
 * @param callback: callback to pass the results JSON object(s) back
 */
module.exports.options = function (req, service, url) {
    console.log("rest::options");
    var apihost = config.host(service);

    var options = {
        host: config.host(service),
        path: url,
        port: req.header("port"),
        method: req.method,
        headers: {
            'authorization': req.header("authorization"),
            'content-type': req.header("content-type")
        }
    };
    return options;
};