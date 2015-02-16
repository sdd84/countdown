var moment = require('moment');
var dur = moment.duration(new moment("2015-03-18 15:00:00").diff(new moment()));
var data = [
  [ Math.floor(dur.asDays()), " Tage" ],
  [ dur.hours(), " Stunden" ],
  [ dur.minutes(), " Minuten" ],
  [ dur.seconds(), " Sekunden" ]
];

console.log("Es dauert noch " + data.map(function(d) {
  return d[0] ? d[0] + d[1] : false;
}).reduce(function(a, b) {
  return b ? a + ", " + b : a;
}));
