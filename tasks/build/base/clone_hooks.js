(function() {
  var cloneRoot, fs, path;

  path = require('path');

  fs = require('fs-extra');

  module.exports = cloneRoot = function(grunt) {
    var helpers;
    helpers = require('../../helpers')(grunt);
    return {
      run: function(fn) {
        var hooksPath, phonegapPath;
        hooksPath = helpers.config('hooks');
        if (hooksPath && hooksPath !== '') {
          phonegapPath = helpers.config('path');
          grunt.log.writeln("Cloning hooks " + hooksPath + " : " + phonegapPath);
          return fs.copy(hooksPath, path.join(phonegapPath, 'hooks'), (function(_this) {
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
          if (fn) {
            return fn();
          }
        }
      }
    };
  };

}).call(this);
