#!/usr/bin/env node
var fs = require('fs'),
    program = require('commander');

var pkg = fs.readJSONSync('./package.json');

program
  .version(pkg.version)
  .option('-n, --new', 'Create New Micro Service')
  .option('-P, --pineapple', 'Add pineapple')
  .parse(process.argv);
