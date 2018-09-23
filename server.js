const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/mainModel',(req, res) => {

  var modelData = [];

  request('https://api.gios.gov.pl/pjp-api/rest/station/findAll', (err, res, body) => {
    console.log('a');
    if (res.statusCode === 503) {
      req.res.end('server not available');
          console.log('b');
    }
    var stations = JSON.parse(body);
    console.log(stations);

    for (let i = 0; i < stations.length; i++) {

      let stationId = stations[i].id;

      modelData.push({
        stationId:stations[i].id,
        stationName:stations[i].stationName,
        stationGegrLat:stations[i].gegrLat,
        stationGegrLon:stations[i].gegrLon,
        sensors:[]
      });

      var sensorsCounter = 0;
      var iteration = 0;
      request(`https://api.gios.gov.pl/pjp-api/rest/station/sensors/${stationId}`, (err, res, body) => {

        var sensors = JSON.parse(body);
        sensorsCounter += sensors.length;

        for (let j = 0; j < sensors.length; j++) {

          request(`https://api.gios.gov.pl/pjp-api/rest/data/getData/${sensors[j].id}`, (err, res, body) => {

            var values = JSON.parse(body);

            values = values.values.filter(function(param){
               return param.value !== null
            });

            values = values.splice(0,24);
            values = values.reverse();

            for (let k = 0; k < values.length; k++) {
              if (k === 0) {
                values[k].date =('wczoraj ' + values[k].date.substr(values[k].date.indexOf(' ')+1).toString()).slice(0,-3);
              } else if (k === 23) {
                values[k].date =('dzisiaj ' + values[k].date.substr(values[k].date.indexOf(' ')+1).toString()).slice(0,-3);
              } else {
                values[k].date = (values[k].date.substr(values[k].date.indexOf(' ')+1).toString()).slice(0,-3);
              }
            }

            iteration++;

            if (values.length >= 24) {

              modelData[i].sensors.push({
                sensorId:sensors[j].id,
                key:sensors[j].param.paramFormula,
                values:values
              });

            }
            if (sensorsCounter === iteration) {
               req.res.end(JSON.stringify(modelData));
            }
          });
        };
      });
    };
  });
});

app.listen(port, ()=> {
   console.log(`Starting application on ${port}`);
});
