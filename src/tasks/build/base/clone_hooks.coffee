path = require 'path'
fs = require('fs-extra')

module.exports = cloneRoot = (grunt) ->
  helpers = require('../../helpers')(grunt)
  run: (fn) ->
    hooksPath = helpers.config 'hooks'
    if hooksPath && hooksPath != ''
      phonegapPath = helpers.config 'path'
      grunt.log.writeln "Cloning hooks #{hooksPath} : #{phonegapPath}"
      fs.copy hooksPath, path.join(phonegapPath, 'hooks'), (err) =>
        if err then grunt.warn err
        if fn then fn err

    else
      if fn then fn()

