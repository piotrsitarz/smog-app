'use strict';

angular.module('smogApp')

    .factory('mainModel', ['$http','googleMap', function($http,googleMap) {

        var factory = {};
        factory.info = 'Proszę czekać trwa wczytywanie danych!';

        factory.get = function() {
          console.log('getModel?');
          $http.get('/mainModel').then(function successCallback(response) {
            console.log(response.data);
            if (response.data === 'server not available') {
              factory.show = false;
              factory.info = 'Pobranie danych jest teraz niemożliwe, spróbuj później.';
            } else {
              factory.show = true;
              factory.info = 'Dane zostały wczytane!';
              for (var i = 0, len = response.data.length; i < len; i++) {
                googleMap.addMarkers(response.data[i]);
              };
            }
          });
        };

        factory.getView = function() {
          factory.view = true;
        };

        factory.get();

        return factory;

    }]);
