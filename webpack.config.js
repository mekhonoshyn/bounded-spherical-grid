/*global require, module, __dirname */

const path = require('path');

module.exports = {
    entry: {
        classes: path.resolve(__dirname, 'classes.js'),
        generator: path.resolve(__dirname, 'generator.js')
    },
    output: {
        path: __dirname + '/bin',
        filename: '[name].js',
        library: '',
        libraryTarget: 'commonjs2'
    },
    target: 'node'
};
