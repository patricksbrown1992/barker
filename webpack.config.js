const path = require('path');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: './frontend/barker.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }],
        }, 
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader", "postcss-loader"]
          }
    ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};