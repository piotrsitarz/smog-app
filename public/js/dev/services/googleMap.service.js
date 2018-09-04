'use strict';

angular.module('smogApp')

    .factory('googleMap', ['chart','$timeout','$mdSidenav', function(chart,$timeout,$mdSidenav) {

        var factory = {};

        function buildToggler(componentId) {
          return function() {
            $mdSidenav(componentId).toggle();
          };
        }

        factory.toggleLeft = buildToggler('left');

        $mdSidenav('left', true).then(function(instance) {
          instance.onClose(function() {
            var sideNav = document.getElementsByClassName('md-sidenav-left')[0];
            sideNav.scrollTop = 0;
          });
        });

        var center = new google.maps.LatLng(52.069167, 19.480556);
        var opcjeMapy = {
            zoom: 7,
            center: center,
            mapTypeId: google.maps.MapTypeId.roadmap,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.BOTTOM_LEFT
            }
          }
        var mapa = new google.maps.Map(document.getElementById("map__google"), opcjeMapy);

        factory.addMarkers = function(station) {

            var rozmiar = new google.maps.Size(32,32);
            var rozmiar_cien = new google.maps.Size(59,32);
            var punkt_startowy = new google.maps.Point(0,0);
            var punkt_zaczepienia = new google.maps.Point(16,16);
            var counter = 0;

            for (var i = 0; i < station.sensors.length; i++) {

              counter++;

                  var paramName = station.sensors[i].key;

                  for (var j = 0; j < 24; j++ ) {

                    var value = station.sensors[i].values[j].value;

                    switch (paramName) {

                      case 'PM10':
                          if (value <= 21) {
                          station.sensors[i].values[j].color = '#00B050';
                          }
                          else if (value > 21 && value <= 61) {
                          station.sensors[i].values[j].color = '#92D050';
                          }
                          else if (value > 61 && value <= 101) {
                          station.sensors[i].values[j].color = '#FFC700';
                          }
                          else if (value > 101 && value <= 141) {
                          station.sensors[i].values[j].color = '#FFC000';
                          }
                          else if (value > 141 && value <= 201) {
                          station.sensors[i].values[j].color = '#FF0000';
                          }
                          else {
                          station.sensors[i].values[j].color = '#C00000';
                          }

                      break;

                      case 'PM2.5':
                          if (value <= 13) {
                          station.sensors[i].values[j].color = '#00B050';
                          }
                          else if (value > 13 && value <= 37) {
                          station.sensors[i].values[j].color = '#92D050';
                          }
                          else if (value > 37 && value <= 61) {
                          station.sensors[i].values[j].color = '#FFC700';
                          }
                          else if (value > 61 && value <= 85) {
                          station.sensors[i].values[j].color = '#FFC000';
                          }
                          else if (value > 85 && value <= 121) {
                          station.sensors[i].values[j].color = '#FF0000';
                          }
                          else {
                          station.sensors[i].values[j].color = '#C00000';
                          }

                      break;

                      case 'SO2':
                          if (value <= 51) {
                          station.sensors[i].values[j].color = '#00B050';
                          }
                          else if (value > 51 && value <= 101) {
                          station.sensors[i].values[j].color = '#92D050';
                          }
                          else if (value > 101 && value <= 201) {
                          station.sensors[i].values[j].color = '#FFC700';
                          }
                          else if (value > 201 && value <= 351) {
                          station.sensors[i].values[j].color = '#FFC000';
                          }
                          else if (value > 351 && value <= 501) {
                          station.sensors[i].values[j].color = '#FF0000';
                          }
                          else {
                          station.sensors[i].values[j].color = '#C00000';
                          }

                      break;

                      case 'NO2':
                          if (value <= 41) {
                          station.sensors[i].values[j].color = '#00B050';
                          }
                          else if (value > 41 && value <= 101) {
                          station.sensors[i].values[j].color = '#92D050';
                          }
                          else if (value > 101 && value <= 151) {
                          station.sensors[i].values[j].color = '#FFC700';
                          }
                          else if (value > 151 && value <= 201) {
                          station.sensors[i].values[j].color = '#FFC000';
                          }
                          else if (value > 201 && value <= 401) {
                          station.sensors[i].values[j].color = '#FF0000';
                          }
                          else {
                          station.sensors[i].values[j].color = '#C00000';
                          }

                      break;

                      case 'CO':
                          if (value <= 300) {
                          station.sensors[i].values[j].color = '#00B050';
                          }
                          else if (value > 300 && value <= 700) {
                          station.sensors[i].values[j].color = '#92D050';
                          }
                          else if (value > 700 && value <= 1100) {
                          station.sensors[i].values[j].color = '#FFC700';
                          }
                          else if (value > 1100 && value <= 1500) {
                          station.sensors[i].values[j].color = '#FFC000';
                          }
                          else if (value > 1500 && value <= 2100) {
                          station.sensors[i].values[j].color = '#FF0000';
                          }
                          else {
                          station.sensors[i].values[j].color = '#C00000';
                          }

                      break;

                      case 'O3':
                          if (value <= 71) {
                          station.sensors[i].values[j].color = '#00B050';
                          }
                          else if (value > 71 && value <= 121) {
                          station.sensors[i].values[j].color = '#92D050';
                          }
                          else if (value > 121 && value <= 151) {
                            station.sensors[i].values[j].color = '#FFC700';
                          }
                          else if (value > 151 && value <= 181) {
                          station.sensors[i].values[j].color = '#FFC000';
                          }
                          else if (value > 181 && value <= 241) {
                          station.sensors[i].values[j].color = '#FF0000';
                          }
                          else {
                          station.sensors[i].values[j].color = '#C00000';
                          }

                      break;

                      case 'C6H6':
                          if (value <= 6) {
                          station.sensors[i].values[j].color = '#00B050';
                          }
                          else if (value > 6 && value <= 11) {
                          station.sensors[i].values[j].color = '#92D050';
                          }
                          else if (value > 11 && value <= 16) {
                          station.sensors[i].values[j].color = '#FFC700';
                          }
                          else if (value > 16 && value <= 21) {
                          station.sensors[i].values[j].color = '#FFC000';
                          }
                          else if (value > 21 && value <= 51) {
                          station.sensors[i].values[j].color = '#FF0000';
                          }
                          else {
                          station.sensors[i].values[j].color = '#C00000';
                          }

                      break;

                    }
                  }
                  if (counter === station.sensors.length) {

                      var currentValue = station.sensors[station.sensors.length-1].values[0].value.toFixed(0);
                      var paramKey = station.sensors[station.sensors.length-1].key;
                      var pinColor = '000000';

                      switch (paramKey) {

                        case 'PM10':
                            if (currentValue <= 21) {
                              pinColor = '00B050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo dobra!';
                              station.text2 = 'Warunki bardzo sprzyjające do wszelkich aktywności na wolnym powietrzu, bez ograniczeń.';
                              station.background = '#00B050';
                            }
                            else if (currentValue > 21 && currentValue <= 61) {
                              pinColor = '92D050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zadowalająca!';
                              station.text2 = 'Można przebywać na wolnym powietrzu i wykonywać dowolną aktywność, bez ograniczeń.';
                              station.background = '#92D050';
                            }
                            else if (currentValue > 61 && currentValue <= 101) {
                              pinColor = 'FFC700';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest akceptowalna!';
                              station.text2 = 'Warunki umiarkowane do aktywności na wolnym powietrzu.';
                              station.background = '#FFC700';
                            }
                            else if (currentValue > 101 && currentValue <= 141) {
                              pinColor = 'FFC000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest dostateczna!';
                              station.text2 = 'Należy rozważyć ograniczenie aktywności na wolnym powietrzu.';
                              station.background = '#FFC000';
                            }
                            else if (currentValue > 141 && currentValue <= 201) {
                              pinColor = 'FF0000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na wolnym powietrzu.';
                              station.background = '#FF0000';
                            }
                            else {
                              pinColor = 'C00000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu.';
                              station.background = '#C00000';
                            }

                        break;

                        case 'PM2.5':
                            if (currentValue <= 13) {
                              pinColor = '00B050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo dobra!';
                              station.text2 = 'Warunki bardzo sprzyjające do wszelkich aktywności na wolnym powietrzu, bez ograniczeń.';
                              station.background = '#00B050';
                            }
                            else if (currentValue > 13 && currentValue <= 37) {
                              pinColor = '92D050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zadowalająca!';
                              station.text2 = 'Można przebywać na wolnym powietrzu i wykonywać dowolną aktywność, bez ograniczeń.';
                              station.background = '#92D050';
                            }
                            else if (currentValue > 37 && currentValue <= 61) {
                              pinColor = 'FFC700';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest akceptowalna!';
                              station.text2 = 'Warunki umiarkowane do aktywności na wolnym powietrzu.';
                              station.background = '#FFC700';
                            }
                            else if (currentValue > 61 && currentValue <= 85) {
                              pinColor = 'FFC000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest dostateczna!';
                              station.text2 = 'Należy rozważyć ograniczenie aktywności na wolnym powietrzu.';
                              station.background = '#FFC000';
                            }
                            else if (currentValue > 85 && currentValue <= 121) {
                              pinColor = 'FF0000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na wolnym powietrzu.';
                              station.background = '#FF0000';
                            }
                            else {
                              pinColor = 'C00000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu.';
                              station.background = '#C00000';
                            }

                        break;

                        case 'SO2':
                            if (currentValue <= 51) {
                              pinColor = '00B050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo dobra!';
                              station.text2 = 'Warunki bardzo sprzyjające do wszelkich aktywności na wolnym powietrzu, bez ograniczeń.';
                              station.background = '#00B050';
                            }
                            else if (currentValue > 51 && currentValue <= 101) {
                              pinColor = '92D050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zadowalająca!';
                              station.text2 = 'Można przebywać na wolnym powietrzu i wykonywać dowolną aktywność, bez ograniczeń.';
                              station.background = '#92D050';
                            }
                            else if (currentValue > 101 && currentValue <= 201) {
                              pinColor = 'FFC700';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest akceptowalna!';
                              station.text2 = 'Warunki umiarkowane do aktywności na wolnym powietrzu.';
                              station.background = '#FFC700';
                            }
                            else if (currentValue > 201 && currentValue <= 351) {
                              pinColor = 'FFC000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest dostateczna!';
                              station.text2 = 'Należy rozważyć ograniczenie aktywności na wolnym powietrzu.';
                              station.background = '#FFC000';
                            }
                            else if (currentValue > 351 && currentValue <= 501) {
                              pinColor = 'FF0000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na wolnym powietrzu.';
                              station.background = '#FF0000';
                            }
                            else {
                              pinColor = 'C00000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu.';
                              station.background = '#C00000';
                            }

                        break;

                        case 'NO2':
                            if (currentValue <= 41) {
                              pinColor = '00B050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo dobra!';
                              station.text2 = 'Warunki bardzo sprzyjające do wszelkich aktywności na wolnym powietrzu, bez ograniczeń.';
                              station.background = '#00B050';
                            }
                            else if (currentValue > 41 && currentValue <= 101) {
                              pinColor = '92D050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zadowalająca!';
                              station.text2 = 'Można przebywać na wolnym powietrzu i wykonywać dowolną aktywność, bez ograniczeń.';
                              station.background = '#92D050';
                            }
                            else if (currentValue > 101 && currentValue <= 151) {
                              pinColor = 'FFC700';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest akceptowalna!';
                              station.text2 = 'Warunki umiarkowane do aktywności na wolnym powietrzu.';
                              station.background = '#FFC700';
                            }
                            else if (currentValue > 151 && currentValue <= 201) {
                              pinColor = 'FFC000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest dostateczna!';
                              station.text2 = 'Należy rozważyć ograniczenie aktywności na wolnym powietrzu.';
                              station.background = '#FFC000';
                            }
                            else if (currentValue > 201 && currentValue <= 401) {
                              pinColor = 'FF0000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na wolnym powietrzu.';
                              station.background = '#FF0000';
                            }
                            else {
                              pinColor = 'C00000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu.';
                              station.background = '#C00000';
                            }

                        break;

                        case 'CO':
                            if (currentValue <= 300) {
                              pinColor = '00B050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo dobra!';
                              station.text2 = 'Warunki bardzo sprzyjające do wszelkich aktywności na wolnym powietrzu, bez ograniczeń.';
                              station.background = '#00B050';
                            }
                            else if (currentValue > 300 && currentValue <= 700) {
                              pinColor = '92D050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zadowalająca!';
                              station.text2 = 'Można przebywać na wolnym powietrzu i wykonywać dowolną aktywność, bez ograniczeń.';
                              station.background = '#92D050';
                            }
                            else if (currentValue > 700 && currentValue <= 1100) {
                              pinColor = 'FFC700';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest akceptowalna!';
                              station.text2 = 'Warunki umiarkowane do aktywności na wolnym powietrzu.';
                              station.background = '#FFC700';
                            }
                            else if (currentValue > 1100 && currentValue <= 1500) {
                              pinColor = 'FFC000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest dostateczna!';
                              station.text2 = 'Należy rozważyć ograniczenie aktywności na wolnym powietrzu.';
                              station.background = '#FFC000';
                            }
                            else if (currentValue > 1500 && currentValue <= 2100) {
                              pinColor = 'FF0000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na wolnym powietrzu.';
                              station.background = '#FF0000';
                            }
                            else {
                              pinColor = 'C00000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu.';
                              station.background = '#C00000';
                            }

                        break;

                        case 'O3':
                            if (currentValue <= 71) {
                              pinColor = '00B050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo dobra!';
                              station.text2 = 'Warunki bardzo sprzyjające do wszelkich aktywności na wolnym powietrzu, bez ograniczeń.';
                              station.background = '#00B050';
                            }
                            else if (currentValue > 71 && currentValue <= 121) {
                              pinColor = '92D050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zadowalająca!';
                              station.text2 = 'Można przebywać na wolnym powietrzu i wykonywać dowolną aktywność, bez ograniczeń.';
                              station.background = '#92D050';
                            }
                            else if (currentValue > 121 && currentValue <= 151) {
                              pinColor = 'FFC700';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest akceptowalna!';
                              station.text2 = 'Warunki umiarkowane do aktywności na wolnym powietrzu.';
                              station.background = '#FFC700';
                            }
                            else if (currentValue > 151 && currentValue <= 181) {
                              pinColor = 'FFC000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest dostateczna!';
                              station.text2 = 'Należy rozważyć ograniczenie aktywności na wolnym powietrzu.';
                              station.background = '#FFC000';
                            }
                            else if (currentValue > 181 && currentValue <= 241) {
                              pinColor = 'FF0000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na wolnym powietrzu.';
                              station.background = '#FF0000';
                            }
                            else {
                              pinColor = 'C00000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu.';
                              station.background = '#C00000';
                            }

                        break;

                        case 'C6H6':
                            if (currentValue <= 6) {
                              pinColor = '00B050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo dobra!';
                              station.text2 = 'Warunki bardzo sprzyjające do wszelkich aktywności na wolnym powietrzu, bez ograniczeń.';
                              station.background = '#00B050';
                            }
                            else if (currentValue > 6 && currentValue <= 11) {
                              pinColor = '92D050';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zadowalająca!';
                              station.text2 = 'Można przebywać na wolnym powietrzu i wykonywać dowolną aktywność, bez ograniczeń.';
                              station.background = '#92D050';
                            }
                            else if (currentValue > 11 && currentValue <= 16) {
                              pinColor = 'FFC700';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest akceptowalna!';
                              station.text2 = 'Warunki umiarkowane do aktywności na wolnym powietrzu.';
                              station.background = '#FFC700';
                            }
                            else if (currentValue > 16 && currentValue <= 21) {
                              pinColor = 'FFC000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest dostateczna!';
                              station.text2 = 'Należy rozważyć ograniczenie aktywności na wolnym powietrzu.';
                              station.background = '#FFC000';
                            }
                            else if (currentValue > 21 && currentValue <= 51) {
                              pinColor = 'FF0000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny unikać przebywania na wolnym powietrzu.';
                              station.background = '#FF0000';
                            }
                            else {
                              pinColor = 'C00000';
                              station.caqi = currentValue;
                              station.text1 = 'Jakość powietrza jest bardzo zła!';
                              station.text2 = 'Osoby chore, starsze, kobiety w ciąży oraz małe dzieci powinny bezwzględnie unikać przebywania na wolnym powietrzu.';
                              station.background = '#C00000';
                            }
                        break;
                      }

                  var ikona1 = new google.maps.MarkerImage("https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor, rozmiar, punkt_startowy, punkt_zaczepienia);
                  var punkt  = new google.maps.LatLng(station.stationGegrLat, station.stationGegrLon);

                  var opcjeMarkera = {
                      position: punkt,
                      map: mapa,
                      title:station.stationName,
                      icon: ikona1
                  };

                  var marker = new google.maps.Marker(opcjeMarkera);

                  google.maps.event.addListener(marker,"click",function() {

                  $timeout((function() {
                  factory.model = station;
                  chart.create(factory.model);
                  }), 0);

                  factory.toggleLeft();

                });
              }
            }
          }

        return factory;

    }]);
