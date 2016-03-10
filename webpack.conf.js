module.exports = {
    devtool: 'inline-source-map',
    bail: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    compact: false,
                    cacheDirectory: true
                }
            }
        ]
    },
    watch: false
};
