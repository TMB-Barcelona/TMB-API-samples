// Generated on 2014-08-04 using generator-webapp 0.4.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        tpl: 'app_tpl',
        dist: 'dist',
        gist: 'gist'
    };

    var pass = grunt.file.readJSON('pass.json');

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= config.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            styles: {
                files: ['<%= config.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            templates: {
                files: ['<%= config.tpl %>/**/*.html'],
                tasks: ['includes']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= config.app %>/images/{,*/}*',
                    '<%= config.app %>/samples.json'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9009,
                protocol: "https",
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    open: false,
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            gist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.gist %>/*'
                    ]
                }]
            },
            "gh-pages": {
                files: [{
                    dot: true,
                    src: [
                        '.grunt'
                    ]
                }]
            },
            server: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.app %>/*.html', '!<%= config.app %>/404.html',
                        '<%= config.app %>/scripts/auth.js'
                    ]
                }]
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js',
                '!<%= config.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['https://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        wiredep: {
            app: {
                src: ['includes/{,*/}*.html'],
                exclude: ['bower_components/bootstrap/dist/js/bootstrap.js']
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/styles/{,*/}*.css',
                        '<%= config.dist %>/styles/fonts/{,*/}*.*',
                        // '<%= config.dist %>/images/{,*/}*.*',
                        // '<%= config.dist %>/*.{ico,png}'
                    ]
                }
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                debug: true,
                dest: '<%= config.dist %>'
            },
            html: ['<%= config.app %>/index.html']
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
            },
            html: ['<%= config.dist %>/*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        includes: {
            dist: {
                cwd: '<%= config.tpl %>',
                src: ['*.html'],
                dest: '<%= config.app %>',
                options: {
                    includePath: 'includes'
                }
            },
            gist: {
                cwd: '<%= config.tpl %>',
                src: ['*_gist.html'],
                dest: '<%= config.gist %>',
                options: {
                    includePath: '.tmp/includes/gist'
                }
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'samples.json',
                        'data/*',
                        'images/{,*/}*.*',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: ['fonts/*.*'],
                    dest: '<%= config.dist %>'
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            gist: {
                expand: true,
                dot: true,
                cwd: 'includes',
                dest: '.tmp/includes/',
                src: 'gist/{,*/}*.html'

            },
            gist_: {
                expand: true,
                dot: true,
                cwd: 'includes',
                dest: '.tmp/includes/gist',
                src: [
                    'ol3/{,*/}*.html',
                    'leaflet/{,*/}*.html',
                    'gmaps/{,*/}*.html'
                ]
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                //'imagemin',
                'svgmin'
            ]
        },

        // Run to create and push gh-pages
        'gh-pages': {
            options: {
                base: 'dist',
                message: 'Auto-generated gh-pages commit',
                push: true
            },
            src: ['**/*']
        },

        // Replace the local with TMB Github app_key and app_id
        'replace': {
            dist: {
                options: {
                    patterns: [
                        {
                            match: /#app_key_here/g,
                            replacement: pass.github.app_key
                        },
                        {
                            match: /#app_id_here/g,
                            replacement: pass.github.app_id
                        },
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= config.tpl %>/scripts/auth.js'],
                        dest: '.tmp/concat/scripts/'
                    }
                ]
            },
            local: {
                options: {
                    patterns: [
                        {
                            match: /#app_key_here/g,
                            replacement: pass.local.app_key
                        },
                        {
                            match: /#app_id_here/g,
                            replacement: pass.local.app_id
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= config.tpl %>/scripts/auth.js'],
                        dest: '<%= config.app %>/scripts/'
                    }
                ]
            },
            gist: {
                options: {
                    patterns: [
                        {
                            match: /#app_key_here/g,
                            replacement: pass.local.app_key
                        },
                        {
                            match: /#app_id_here/g,
                            replacement: pass.local.app_id
                        },
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['includes/gist/head.html'],
                        dest: '.tmp/includes/gist/'
                    }
                ]
            }
        }
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'includes:dist',
            'concurrent:server',
            'autoprefixer',
            'replace:local',
            'connect:livereload',
            'gist',
            'watch'
        ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test',
            'mocha'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'includes:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'replace:dist',
        'cssmin',
        'uglify',
        'copy:dist',
        'rev',
        'usemin'
        // ,
        // 'htmlmin'
    ]);

    grunt.registerTask('default', [
        'serve'
    ]);

    grunt.registerTask('ghpages', [
        'clean:gh-pages',
        'build',
        'gh-pages'
    ]);

    grunt.registerTask('gist', [
        'clean:gist',
        'copy:gist',
        'copy:gist_',
        'replace:gist',
        'includes:gist'
    ]);
};
