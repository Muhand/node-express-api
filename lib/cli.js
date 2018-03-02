#!/usr/bin/env node

// Grab provided args
const [,, ... args] = process.argv;

// Print hello world and the provided args
console.log(`Hello world ${args}`);
