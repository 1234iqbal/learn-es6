module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: __dirname + '/build',
        port: 3000
    }
}