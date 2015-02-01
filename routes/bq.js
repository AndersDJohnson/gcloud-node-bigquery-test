var express = require('express');
var router = express.Router();
var gcloud = require('gcloud');

var bigquery;
if (process.env.NODE_ENV === 'staging') {
    bigquery = gcloud.bigquery({
        projectId: process.env.BQ_PROJECT_ID,
        credentials: {
            "private_key_id": process.env.BQ_PRIVATE_KEY_ID,
            "private_key": process.env.BQ_PRIVATE_KEY,
            "client_email": process.env.BQ_CLIENT_EMAIL,
            "client_id": process.env.BQ_CLIENT_ID,
            "type": process.env.BQ_TYPE
        }
    });
} else {
    var config = require('../specific/config.json');
    bigquery = gcloud.bigquery({
        projectId: config.BQ_PROJECT_ID,
        keyFilename: config.BQ_KEY_FILE
    });
}

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
        if (err) {
            console.log('err::', err);
        }
        console.log(JSON.stringify(rows));
        if (nextQuery) {
            bigquery.query(nextQuery, function(err, rows, nextQuery) {});
        }
        res.json(rows);
    });
});

router.get('/weather', function(req, res) {
    var query = 'SELECT year, month, day, thunder, rain, FROM [publicdata:samples.gsod] WHERE thunder=TRUE AND rain=TRUE AND station_number=037720 ORDER BY year DESC, month DESC, day DESC LIMIT 10';
    bigquery.query(query, function(err, rows, nextQuery) {
        if (err) {
            console.log('err::', err);
        }
        console.log(JSON.stringify(rows));
        if (nextQuery) {
            bigquery.query(nextQuery, function(err, rows, nextQuery) {});
        }
        res.json(rows);
    });
});

module.exports = router;
