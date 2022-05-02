#!/usr/bin/env node
const config = require('../config/env.config');
const join = require('path').join
const childProcess = require('child_process');
const args = process.argv.slice(2);

 args.unshift(__dirname + '/../'); 

childProcess.exec(config.main_script, (err, stdout) => {
if (err) console.log(err);
console.log(stdout);
})