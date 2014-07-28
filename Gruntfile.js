module.exports = function(grunt) {

  var Helpers = require('./tasks/helpers'),
      filterAvailable = Helpers.filterAvailableTasks,
      _ = grunt.util._,
      path = require('path');

  Helpers.pkg = require("./package.json");

  if (Helpers.isPackageAvailable("time-grunt")) {
    require("time-grunt")(grunt);
  }

  // Loads task options from `tasks/options/` and loads tasks defined in `package.json`
  var config = _.extend({},
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'tasks/options'),
        init: false
      })
  );

  grunt.loadTasks('tasks'); // Loads tasks in `tasks/` folder

  config.env = process.env;

  grunt.registerTask('default', ['copy:snippets']);

  grunt.initConfig(config);
};
