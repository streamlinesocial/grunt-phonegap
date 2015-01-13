path = require 'path'
ncp = require('ncp').ncp

module.exports = cloneRoot = (grunt) ->
  helpers = require('../../helpers')(grunt)
  run: (fn) ->
    grunt.log.writeln 'Cloning hooks directory'
    hooksPath = helpers.config 'hooks'
    phonegapPath = helpers.config 'path'

    ncp hooksPath, path.join(phonegapPath, 'hooks'), { stopOnError: true }, (err) =>
      if err then grunt.warn err
      if fn then fn err
