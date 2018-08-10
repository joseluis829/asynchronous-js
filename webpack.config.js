const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build/bundle.js',
        path: path.resolve(__dirname),
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                use: 'babel-loader',
            }
        ]
    }
}