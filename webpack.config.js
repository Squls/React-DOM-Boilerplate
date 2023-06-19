var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/export.js',
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },
    output: {
        path: path.join(__dirname, './dist/'),
        library: {
            name: 'reactDOM',
            type: 'umd'
        },
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                globalObject: `(typeof self !== 'undefined' ? self : this)`
            }
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    resolve: {
        fallback: {
            'process/browser': require.resolve('process/browser'),
        },
        extensions: ['', '.js', '.jsx'],
        alias: {
            process: 'process/browser',
            Helpers: path.resolve(__dirname, 'src/helpers/'),
        }
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
}
