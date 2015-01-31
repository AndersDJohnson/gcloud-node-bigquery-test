(function() {
    'use strict';

    $('#bq-button').click(function(e) {
        // console.log(e);
        $.getJSON( '/bq', function(data) {
            var target = $('#result');
            target.empty();
            target.append('<div>' + JSON.stringify(data) + '</div>');
        });
    });

    $('#bq-button-url').click(function(e) {
        // console.log(e);
        $.getJSON( '/bq/url', function(data) {
            var target = $('#result');
            target.empty();
            target.append('<div>' + JSON.stringify(data) + '</div>');
        });
    });

    $('#bq-button-weather').click(function(e) {
        // console.log(e);
        $.getJSON( '/bq/weather', function(data) {
            var target = $('#result');
            target.empty();
            target.append('<div>' + JSON.stringify(data) + '</div>');
        });
    });
})();
