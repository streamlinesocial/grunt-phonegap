path = require 'path'
fs = require('fs-extra')

module.exports = cloneCordova = (grunt) ->
  helpers = require('../../helpers')(grunt)

  run: (fn) ->
    grunt.log.writeln 'Cloning .cordova directory'
    cordovaPath = helpers.config 'cordova'
    phonegapPath = helpers.config 'path'
    fs.copy cordovaPath, path.join(phonegapPath, '.cordova'), (err) =>
      if err then grunt.warn err
      if fn then fn err
