var data = require('./data.json');

exports.hi = function () {
  return 'Hi';
};

exports.getCountries = function () {
  return data.countries;
};

exports.getFrenchCountries = function () {
  return data.frencheCountries;
};
