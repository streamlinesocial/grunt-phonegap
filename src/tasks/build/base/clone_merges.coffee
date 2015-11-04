path = require 'path'
fs = require('fs-extra')

module.exports = cloneRoot = (grunt) ->
  helpers = require('../../helpers')(grunt)
  run: (fn) ->
    mergesPath = helpers.config 'merges'
    if mergesPath && mergesPath != ''
      grunt.log.writeln mergesPath
      grunt.log.writeln 'Cloning root directory'
      phonegapPath = helpers.config 'path'
      fs.copy mergesPath, path.join(phonegapPath, 'merges'), (err) =>
        if err then grunt.warn err
        if fn then fn err

    else
      grunt.log.writeln 'NOT Cloning root directory'
      if fn then fn()
