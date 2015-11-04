(function() {
  var cloneRoot, fs, path;

  path = require('path');

  fs = require('fs-extra');

  module.exports = cloneRoot = function(grunt) {
    var helpers;
    helpers = require('../../helpers')(grunt);
    return {
      run: function(fn) {
        var phonegapPath, rootPath;
        grunt.log.writeln('Cloning root directory');
        rootPath = helpers.config('root');
        phonegapPath = helpers.config('path');
        return fs.copy(rootPath, path.join(phonegapPath, 'www'), (function(_this) {
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
