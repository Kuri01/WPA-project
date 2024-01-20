const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = () => {
    return merge(common(), {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            static: './dist',
            port: 3001,
        },
    });
};
