var express = require('express');
var router = express.Router();
var config = require('../specific/config.json');
var gcloud = require('gcloud');

var bigquery = gcloud.bigquery({
    projectId: config.projectId,
    keyFilename: config.keyFilename
});

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res) {
    var json = require('../models/test.json');
    res.json(json);
});

router.get('/url', function(req, res) {
    var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';
    bigquery.query(query, function(err, rows, nextQuery) {
        // console.log(JSON.stringify(rows));
        if (nextQuery) {
            bigquery.query(nextQuery, function(err, rows, nextQuery) {});
        }
        res.json(rows);
    });
});

router.get('/weather', function(req, res) {
    var query = 'SELECT year, month, day, thunder, rain, FROM [publicdata:samples.gsod] WHERE thunder=TRUE AND rain=TRUE AND station_number=037720 ORDER BY year DESC, month DESC, day DESC LIMIT 10';
    bigquery.query(query, function(err, rows, nextQuery) {
        // console.log(JSON.stringify(rows));
        if (nextQuery) {
            bigquery.query(nextQuery, function(err, rows, nextQuery) {});
        }
        res.json(rows);
    });
});

module.exports = router;
