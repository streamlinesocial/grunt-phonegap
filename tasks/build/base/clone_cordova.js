(function() {
  var cloneCordova, fs, path;

  path = require('path');

  fs = require('fs-extra');

  module.exports = cloneCordova = function(grunt) {
    var helpers;
    helpers = require('../../helpers')(grunt);
    return {
      run: function(fn) {
        var cordovaPath, phonegapPath;
        grunt.log.writeln('Cloning .cordova directory');
        cordovaPath = helpers.config('cordova');
        phonegapPath = helpers.config('path');
        return fs.copy(cordovaPath, path.join(phonegapPath, '.cordova'), (function(_this) {
          return function(err) {
            if (err) {
              grunt.warn(err);
            }
            if (fn) {
              return fn(err);
            }
          };
        })(this));
      }
    };
  };

}).call(this);
