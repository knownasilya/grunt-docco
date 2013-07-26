# grunt-docco

Grunt Docco plugin.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-docco`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-docco');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
```
docco: {
  debug: {
    src: ['test/**/*.js'],
    options: {
      output: 'docs/test'
    }
  }
}

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
- 0.3.4 [25.07.2013]: Use git+https protocol to avoid firewall issues for docco dependency
- 0.3.3 [25.07.2013]: Instead of "0.6.2" bind to https://github.com/jashkenas/docco/commit/eb1163723a0ac04b0740d57b6b8a6d3bd4e5893f that fix windows integration [issue](https://github.com/jashkenas/docco/pull/181)
- 0.3.2 [25.07.2013]: Assure the output dir exists, otherwise is created BEFORE calling docco (to avoid this [issue](https://github.com/jashkenas/docco/pull/181) on Windows calling 'mkdir')
- 0.3.1 [24.07.2013]: Correctly set the Docco output using options.output or file.dest and fix docco.document() invocation (up to 0.3.1 the dest will be 'docs' anyway and invocation will result in odd error)

## License
Copyright (c) 2012 David Souther  
Licensed under the MIT license.
