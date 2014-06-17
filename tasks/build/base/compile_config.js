(function() {
  var compileConfig, cp, path;

  path = require('path');

  cp = require('cp');

  module.exports = compileConfig = function(grunt) {
    var helpers;
    helpers = require('../../helpers')(grunt);
    return {
      run: function(fn) {
        var compiled, configXml, dest, phonegapPath, template;
        grunt.log.writeln('Compiling config.xml');
        phonegapPath = helpers.config('path');
        configXml = helpers.config('config');

        /*
        @todo: we may need to make this configurable for backwards-compatability
        @see: http://stackoverflow.com/a/23354889
        if we put the config.xml inside the www directory as of about cordova 3.4.0, then
        app/ is considered the best candidate, what we want is to make cordova cli think that
        app/<config.path> is the best canidate, thus we need to place the config.xml at
        app/<config.path>/config.xml and not at app/<config.path>/www/config.xml
         */
        dest = path.join(phonegapPath, 'config.xml');
        if (grunt.util.kindOf(configXml) === 'string') {
          grunt.log.writeln("Copying static " + configXml);
          return cp(configXml, dest, function(err) {
            if (fn) {
              return fn(err);
            }
          });
        } else {
          grunt.log.writeln("Compiling template " + configXml.template);
          template = grunt.file.read(configXml.template);
          compiled = grunt.template.process(template, {
            data: configXml.data
          });
          grunt.file.write(dest, compiled);
          if (fn) {
            return fn();
          }
        }
      }
    };
  };

}).call(this);
