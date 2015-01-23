module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg:    grunt.file.readJSON('package.json'),
		less: 	{
				options: {
					paths: ['less'],
					yuicompress: true
				},
				src: {
					expand: true,
					cwd: 'less',
					src: '*.less', 
					ext: '.css'
				}
		},
		watch: 	{
			less: 	{
				files: 'less/*.less',
				tasks: 'less'
			}
		}
	});

};