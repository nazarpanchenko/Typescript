const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module : {
        rules : [
            {
                test : /js$/,
                use : ['babel-loader']
            },
            {
                test : /css$/,
                use : ['style-loader', 'css-loader']
            }
        ]
    },
    plugins :[
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer : {
        hot : true
    }
};
