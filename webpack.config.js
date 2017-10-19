const path = require('path');

module.exports = () => {
    const config = {
        entry: [
            path.resolve(__dirname, 'src/index')
        ],
        //target: "web",
        devtool: "source-map",
        output: {
            path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
            publicPath: '/dist/',
            filename: 'bundle.js'
        },
        stats: {
            colors: true,
            reasons: true,
            chunks: true
        },
        devServer: {
            port: 3000,
            contentBase: path.resolve(__dirname, 'src')
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: [/\.js$/, /\.jsx$/],
                    exclude: /node_modules/,
                    loaders: ['babel-loader']
                },
                {
                    test: /(\.css)$/,
                    loaders: ['style-loader', 'css-loader']
                },
                {
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file'
                },
                {
                    test: /\.(woff|woff2)$/,
                    loader: 'url?prefix=font/&limit=5000'
                },
                {
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url?limit=10000&mimetype=application/octet-stream'
                },
                {
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'url?limit=10000&mimetype=image/svg+xml'
                },

                {
                    enforce: 'pre',
                    test: [/\.js$/, /\.jsx$/],
                    exclude: [/node_modules/, /tests/],
                    loader: 'eslint-loader'
                },
                // {
                //     test: /\.js$|\.jsx$/,
                //     use: {
                //         loader: 'istanbul-instrumenter-loader',
                //         options: { esModules: true }
                //     },
                //     enforce: 'post',
                //     exclude: /node_modules|\.spec\.js$/,
                // }
            ]
        }
    };

    return config;
};
