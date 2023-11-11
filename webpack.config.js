const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].${ext}`;
const assetFilename = '[path][name][ext]';

const pathDirFile = isDev ? 'app' : 'dist';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, pathDirFile),
        filename: `./js/${filename('js')}`,
        assetModuleFilename: assetFilename,
        clean: true,
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'src'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:  path.resolve(__dirname, 'src/front.pug'),
            filename: "index.html",
        }),
        new HTMLWebpackPlugin({
            template:  path.resolve(__dirname, 'src/page-menu.pug'),
            filename: "menu.html",
        }),


        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist') },
            ],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
                onEnd: {
                    copy: [
                        {
                            source: path.join(__dirname, 'src/assets/img/svg'),
                            destination: path.join(__dirname, 'dist/assets/img/svg'),
                        },
                    ],
                },
            },
        }),
    ],

    module:{
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                },
            },
            {
                test: /\.css$/i,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev
                    },
                }, "css-loader"],
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: (resourcePath, context) => {
                            return path.relative(path.dirname(resourcePath), context) + '/';
                        },
                    }
                },
                    "css-loader",
                    'sass-loader'
                ],
            },
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            },

            //load fonts
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
};
