'use strict';

angular.module('smogApp')

    .factory('chart', ['$http','$timeout','$window', function($http,$timeout,$window) {

        var factory = {};

        if ($window.innerWidth < 570) {
          var rotate = -90;
          var bottom = 80;
        } else {
          var rotate = -45;
          var bottom = 70;
        }

        factory.create = function(model) {

          factory.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                  top: 70,
                  right: 60,
                  bottom: bottom,
                  left: 60
                },
                x: function(d){return d.date;},
                y: function(d){return d.value;},
                xAxis: {
                  rotateLabels: rotate
                },
                yAxis: {
                  axisLabelDistance: -10
               }
            }
          };


          $timeout((function() {
            factory.dataset = model.sensors;
          }), 0);

        };

        factory.getTitle = function(param) {
          switch (param) {
            case 'PM10':
                return 	 '<p class="paragraph--chart-title">PM10 [µg/m<sup>3</sup>] </p>';
                break;
            case 'PM2.5':
                  return  '<p class="paragraph--chart-title">PM2,5 [µg/m<sup>3</sup>] </p>';
                break;
            case 'SO2':
                  return  '<p class="paragraph--chart-title">SO<sub>2</sub> [µg/m<sup>3</sup>] </p>';
                break;
            case 'NO2':
                  return  '<p class="paragraph--chart-title">NO<sub>2</sub> [µg/m<sup>3</sup>] </p>';
                break;
            case 'CO':
                  return '<p class="paragraph--chart-title">PM10 [µg/m<sup>3</sup>] </p>';
                break;
            case 'O3':
                  return '<p class="paragraph--chart-title">O<sub>3</sub> [µg/m<sup>3</sup>] </p>';
                break;
            case 'C6H6':
                  return '<p class="paragraph--chart-title">C<sub>6</sub>H<sub>6</sub>[µg/m<sup>3</sup>] </p>';
            }
        };

        return factory;

    }]);
