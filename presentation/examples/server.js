module.exports =
`const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);
const serverPort = process.env.PORT || 3000;

const app = express();
app
    .use(require('webpack-dev-middleware')(compiler, {publicPath: config.output.publicPath}))
    .use(require('webpack-hot-middleware')(compiler));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(serverPort, 'localhost', err => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening at http://localhost:${ serverPort}`);
});`
