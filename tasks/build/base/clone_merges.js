(function() {
  var cloneRoot, fs, path;

  path = require('path');

  fs = require('fs-extra');

  module.exports = cloneRoot = function(grunt) {
    var helpers;
    helpers = require('../../helpers')(grunt);
    return {
      run: function(fn) {
        var mergesPath, phonegapPath;
        mergesPath = helpers.config('merges');
        if (mergesPath && mergesPath !== '') {
          grunt.log.writeln(mergesPath);
          grunt.log.writeln('Cloning root directory');
          phonegapPath = helpers.config('path');
          return fs.copy(mergesPath, path.join(phonegapPath, 'merges'), (function(_this) {
            return function(err) {
              if (err) {
                grunt.warn(err);
              }
              if (fn) {
                return fn(err);
              }
            };
          })(this));
        } else {
          grunt.log.writeln('NOT Cloning root directory');
          if (fn) {
            return fn();
          }
        }
      }
    };
  };

}).call(this);
