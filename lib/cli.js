#!/usr/bin/env node
const readline = require('readline');
const async = require('async');
var info = {};

//Create an interfact to handle input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Start asking the questions in series
async.series([
    (callback) => {
      rl.question('ABC: ', (answer) => {
        console.log(`X: ${answer}`)
        callback();
      })
    },
    (callback) => {
      rl.question('DEF: ', (answer) => {
        console.log(`Y: ${answer}`)
        callback();
      })
    }
], () => {
  //Questions were asked
  //Close line reading
  rl.close();
});
