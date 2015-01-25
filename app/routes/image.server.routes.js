'use strict';

process.env.TMPDIR = 'tmp';
var multipart = require('connect-multiparty'),
    multipartMiddleware = multipart(),
    flow = require('../../app/controllers/images/images.upload.controller')('tmp');


module.exports = function(app) {

    // Handle uploads through Flow.js
    app.post('/upload', multipartMiddleware, function(req, res) {
        //console.log('post upload');
        flow.post(req, function(status, filename, original_filename, identifier) {
            //console.log('POST', status, original_filename, identifier);
            res.status(status).send();
        });
    });


    // Handle status checks on chunks through Flow.js
    app.get('/upload', function(req, res) {
        console.log('get upload');
        flow.get(req, function(status, filename, original_filename, identifier) {
            //console.log('GET', status);

            if (status === 'found') {
                status = 200;
            } else {
                status = 404;
            }

            res.status(status).send();
        });
    });

    app.get('/download/:identifier', function(req, res) {
        flow.write(req.params.identifier, res);
    });



};