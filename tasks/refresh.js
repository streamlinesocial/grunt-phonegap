(function() {
  var build, fluid;

  fluid = require('fluid');

  module.exports = build = function(grunt) {
    var base, helpers, plugins;
    base = {
      clean: require('./build/base/clean')(grunt).run,
      createTree: require('./build/base/create_tree')(grunt).run,
      cloneRoot: require('./build/base/clone_root')(grunt).run,
      indexHtml: require('./build/base/index_html')(grunt).run,
      cloneCordova: require('./build/base/clone_cordova')(grunt).run,
      compileConfig: require('./build/base/compile_config')(grunt).run
    };
    helpers = require('./helpers')(grunt);
    plugins = helpers.config('plugins');
    return {
      run: function(platforms, fn) {
        platforms = helpers.reducePlatforms(platforms);
        return fluid(base).clean().createTree(platforms).cloneRoot().indexHtml().cloneCordova().compileConfig().go(fn);
      }
    };
  };

}).call(this);
