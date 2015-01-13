(function() {
  var cloneRoot, ncp, path;

  path = require('path');

  ncp = require('ncp').ncp;

  module.exports = cloneRoot = function(grunt) {
    var helpers;
    helpers = require('../../helpers')(grunt);
    return {
      run: function(fn) {
        var hooksPath, phonegapPath;
        grunt.log.writeln('Cloning hooks directory');
        hooksPath = helpers.config('hooks');
        phonegapPath = helpers.config('path');
        return ncp(hooksPath, path.join(phonegapPath, 'hooks'), {
          stopOnError: true
        }, (function(_this) {
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
