module.exports =
`
// server.js
const {join} = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const dev = require('webpack-dev-middleware');
const hmr = require('webpack-hot-middleware');

const compiler = webpack(config);
const serverPort = process.env.PORT || 3000;

const {publicPath} = config.output;
const app = express();
app
    .use(dev(compiler, {publicPath}))
    .use(hmr(compiler));
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});
app.listen(serverPort, 'localhost', err => {
    if (err) {
        console.log(err);
        return;
    }
});

`;
