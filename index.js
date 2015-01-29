'use strict';

var gcloud = require('gcloud');
var bigquery;

bigquery = gcloud.bigquery({
    projectId: '',
    keyFilename: 'specific/key.json'
});

// var query = 'SELECT url FROM [publicdata:samples.github_nested] LIMIT 100';
var query = 'SELECT year, month, day, thunder, rain, FROM [publicdata:samples.gsod] WHERE thunder=TRUE AND rain=TRUE AND station_number=037720 ORDER BY year DESC, month DESC, day DESC LIMIT 10';

bigquery.query(query, function(err, rows, nextQuery) {
    console.log(rows);
    if (nextQuery) {
        bigquery.query(nextQuery, function(err, rows, nextQuery) {});
    }
});
