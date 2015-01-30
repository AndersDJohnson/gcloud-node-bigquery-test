(function() {
    'use strict';

    $('#bq-button').click(function(e) {
        console.log(e);
        $.getJSON( '/bq', function(data) {
            $('<div>' + JSON.stringify(data) + '</div>').appendTo('body');
        });
    });

    $('#bq-button-url').click(function(e) {
        console.log(e);
        $.getJSON( '/bq/url', function(data) {
            $('<div>' + JSON.stringify(data) + '</div>').appendTo('body');
        });
    });

    $('#bq-button-weather').click(function(e) {
        console.log(e);
        $.getJSON( '/bq/weather', function(data) {
            $('<div>' + JSON.stringify(data) + '</div>').appendTo('body');
        });
    });
})();
