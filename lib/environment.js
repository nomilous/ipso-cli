// Generated by CoffeeScript 1.6.3
var EOL, colors, lstatSync, readFileSync, _ref;

_ref = require('fs'), lstatSync = _ref.lstatSync, readFileSync = _ref.readFileSync;

EOL = require('os').EOL;

colors = require('colors');

module.exports.environment = function(altEnv) {
  var content, envFile, error, ext, key, line, m, stat, value, _i, _len, _ref1, _ref2;
  ext = altEnv || 'test';
  envFile = ".env." + ext;
  try {
    stat = lstatSync(envFile);
  } catch (_error) {
    error = _error;
    if (error.errno === 34) {
      console.log('ipso:', ("warning: missing " + envFile).yellow);
      return;
    }
  }
  content = readFileSync(envFile, 'utf8');
  _ref1 = content.split(EOL);
  for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
    line = _ref1[_i];
    if (line === '') {
      continue;
    }
    if (line.match(/^#/)) {
      console.log('ipso:', ("warning: commented line in " + envFile).yellow);
      continue;
    }
    _ref2 = line.match(/^(.*?)\=(.*)$/), m = _ref2[0], key = _ref2[1], value = _ref2[2];
    value = value.replace(/^\'/, '');
    value = value.replace(/\'$/, '');
    value = value.replace(/\"$/, '');
    value = value.replace(/^\"/, '');
    if (key === 'NODE_ENV' && value === 'production') {
      console.log('ipso:', ("warning: " + envFile + " is PRODUCTION").yellow);
    }
    process.env[key] = value;
  }
  return console.log('ipso:', ("loaded " + envFile).green);
};
