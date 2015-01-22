var dest = './dist',
    src  = './lib';

module.exports = {
  runner:{
    src:{
      html: __dirname + 'test/runner.html',
      js: __dirname + 'test/runner.js',
      test: __dirname + 'test/spec/**/*js'
    }
  } 
};
