// NOTE: Leaving commented code below for review and short-lived documentation purpose only.
// The commented code below should be removed before merging if ever accepted.
//
// NOTE: Since this is a stripped down version of build, it's worth looking into removing
// these tasks from build.js and adding a call to this instead?
//
// NOTE: Smooth use of this may be tied to a newer config 'cleanBeforeBuild' being set to false.
//
// This refresh task is a response to https://github.com/logankoester/grunt-phonegap/issues/121,
// and is basically just a stripped down copy of the build.js task. It's goal is to enable
// live refresh based development (web browser based development.)
//
// Usage: grunt phonegap:refresh

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
      // addPlugins: require('./build/base/plugin')(grunt).add,
      // buildPlatforms: require('./build/base/platform')(grunt).build
    };
    helpers = require('./helpers')(grunt);
    plugins = helpers.config('plugins');
    return {
      run: function(platforms, fn) {
        platforms = helpers.reducePlatforms(platforms);
        return fluid(base)
            .clean()
            .createTree(platforms)
            .cloneRoot()
            .indexHtml()
            .cloneCordova()
            .compileConfig()
            // .custom(function(done) {
            //   return base.addPlugins(plugins, function() {
            //     return done();
            //   });
            // }).custom(function(done) {
            //   return base.buildPlatforms(platforms, function() {
            //     return done();
            //   });
            // })
        .go(fn);
      }
    };
  };

}).call(this);

