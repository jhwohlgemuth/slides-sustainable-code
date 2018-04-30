module.exports =
`
    // webpack.config.js
    const path = require('path');
    const webpack = require('webpack');
    module.exports = {
        devtool: 'cheap-module-source-map',
        entry: [
            'babel-polyfill',
            'webpack-hot-middleware/client',
            'react-hot-loader/patch',
            './index'
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist'
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ],
        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: __dirname
            }]
        }
    };

`;
