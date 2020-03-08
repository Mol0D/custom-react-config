const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js"
    },
    devServer: {
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader",
                    { loader: 'css-loader', options: { modules: true, importLoaders: 1 } }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)/,
                use: [
                    'file-loader',
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)/,
                use: [
                    'file=loader'
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html",
        })
    ]
};