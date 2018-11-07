const fs = require('fs');

let nodeModules = {};
fs.readdirSync('./node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

console.log(nodeModules);

fs.readdirSync('./src')
    .forEach(item => {
        console.log(item);
    })