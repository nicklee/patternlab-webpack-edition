const path = require('path');

let config = {
    entry: {
        main: './site/javascript/main/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
        ],
    },
};


module.exports = config;
