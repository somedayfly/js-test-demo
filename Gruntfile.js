module.exports = function(grunt){
	//���в��������Ϣ
	grunt.initConfig({
		//��ȡpackage.json����Ϣ
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