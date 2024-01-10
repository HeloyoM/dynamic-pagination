const path = require('path');

module.exports = {
    entry: './react/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-react-loader',
                  },
                ],
              },
        ],
    },
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'public'),
        // },
        compress: true,
        port: 8080,
        open: true
    },
}