path = require 'path'
fs = require('fs-extra')

module.exports = cloneRoot = (grunt) ->
  helpers = require('../../helpers')(grunt)
  run: (fn) ->
    grunt.log.writeln 'Cloning root directory'
    rootPath = helpers.config 'root'
    phonegapPath = helpers.config 'path'

    fs.copy rootPath, path.join(phonegapPath, 'www'), (err) =>
      if err then grunt.warn err
      if fn then fn err
