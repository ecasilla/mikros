var root = process.cwd();

'use strict';

module.exports = {
  runner:{
    src:{
      html: root + 'test/runner.html',
      js: root + 'lib/**/*.js',
      test: root + 'test/spec/**/*js'
    }
  },
  lint:{
    all:['lib/**/*.js', 'test/**/*.js','build/**/*.js', '!node_modules/']
  },
  spec:{
    path:'test/spec/**/*.js',
    options:{
      ui:'bdd',
      reporter:'spec'
    }
  },
  build:{
    path: root + 'dist/'
  }
};
