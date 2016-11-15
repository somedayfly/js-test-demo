module.exports = function(grunt){
	//所有插件配置信息
	grunt.initConfig({
		//获取package.json的信息
		pkg: grunt.file.readJSON('package.json'),
		
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: ['src/*.js']
		},
		karma: {

            unit: {

                configFile: "karma.conf.js",

                singleRun: true

            }

        }
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');	
	grunt.loadNpmTasks('grunt-karma');
	
	grunt.registerTask('default', ['jshint']);
	grunt.registerTask('test', ['karma']);
};