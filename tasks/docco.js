// grunt-docco
// https://github.com/DavidSouther/grunt-docco
//
// Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict";
var docco = require('docco');

module.exports = function(grunt) {
	grunt.registerMultiTask('docco', 'Docco processor.', function() {
		var task = this,
				fdone = 0,
				flength = this.files.length,
				done = this.async();

		this.files.forEach(function(file) {
			// join 'args' and 'output' from options or file.dest according to docco.document() signature/first param
			var options = task.options({ args: file.src, output: file.dest }),
					output = options.output;
			// log the options
			grunt.verbose.writeflags(options, 'Options');
			// assure the output dir exists, otherwise is created BEFORE calling docco (to avoid issue on Windows calling 'mkdir': https://github.com/jashkenas/docco/pull/181)
			if (output && !grunt.file.isDir(output)) {
				grunt.verbose.write('Create directory "%s"...', output);
				grunt.file.mkdir(output);
				grunt.verbose.ok();
			}
			docco.document(options, function(){
				// done once all the file sets are processed
				if(++fdone === flength) {
					done();
				}
			});
		});
	});
};
