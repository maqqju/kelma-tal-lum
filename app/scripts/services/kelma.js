var app = angular.module('kelmaTalLumApp');

app.factory('Kelma', function($resource) {
    return $resource('/api/kelma/');
});

app.factory("KelmaTalLum", function($resource) {
    return $resource("/api/kelma/kelmaTalLum",  {}, {'query': {method: 'GET', isArray: false}});
});

app.factory("Suggerimenti", function($resource) {
    return $resource("/api/kelma/suggerimenti");
});

