module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        uglify: {
            static_mappings: {
                // Because these src-dest file mappings are manually specified, every
                // time a new file is added or removed, the Gruntfile has to be updated.
                files: [
                    {src: 'app/scripts/controllers/controllers.js', dest: 'build/controllers.min.js'},
                ],
            },
            dynamic_mappings: {
                // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
                // runs and build the appropriate src-dest file mappings then, so you
                // don't need to update the Gruntfile when files are added or removed.
                files: [
                    {
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'app/',      // Src matches are relative to this path.
                        src: ['**/*.js'], // Actual pattern(s) to match.
                        dest: 'build/',   // Destination path prefix.
                        ext: '.min.js',   // Dest filepaths will have this extension.
                        extDot: 'first'   // Extensions in filenames begin after the first dot
                    }
                ]
            }
        }
    });
};