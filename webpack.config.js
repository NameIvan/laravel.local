var path = require('path');
var glob = require("glob");

module.exports = {
    mode: 'development',
    entry: {
        index: './resources/assets/js/chat/index.js',
        app: glob.sync('./resources/assets/react/app/*.js'),
        appRedux: glob.sync('./resources/assets/react/appRedux/*.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
};