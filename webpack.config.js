var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//将你的行内样式提取到单独的css文件里，
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin'); // 文件夹清除工具

var config = {
	entry:
	//	[
	//	'webpack-hot-middleware/client',
	//	path.resolve(__dirname, 'src/js/app.js')
	//],
	{
		//业务代码
		app: path.resolve(__dirname, 'src/js/app.js'), //第三方库
		hello: path.resolve(__dirname, 'src/js/hello.js'), //第三方库
		libs: ["react","react-dom"]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'js/[name].[hash:6].js'
	},
	resolve: {
		root: [],
         //设置require或import的时候可以不需要带后缀
        extensions: ['', '.js', '.less', '.css']
    },
	module: {
		loaders: [
			{test: /\.css$/, loader:  ExtractTextPlugin.extract("style-loader","css-loader")},
			//{
			//	test: /\.jsx$/,
			//	loader: ['babel'],
			//	exclude: /node_modules/,
			//	query:{
			//		presets: ['react', 'es2015']
			//	}
			//},
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',query:{
				presets: ['react', 'es2015']
			}},
			//{
			//	test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			//	loader: 'file-loader?name=./fonts/[name].[ext]'
			//},
			{
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 30720, //30kb 图片转base64。设置图片大小，小于此数则转换。
                    name: 'images/[name].[ext]?' //输出目录以及名称
                }
            }
		]
	},
	plugins: [
        //new webpack.ProvidePlugin({ //全局配置加载
        //   $: "jquery",
        //   jQuery: "jquery",
        //   "window.jQuery": "jquery"
        //}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': '"production"'
			}
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			chunks:['libs','app']
		}),
        new CleanPlugin(['dist']),// 清空dist文件夹
        new webpack.optimize.CommonsChunkPlugin({
			name: 'libs', // 将公共模块提取，生成名为`vendors`的chunk
			minChunks:3
        }),
		new ExtractTextPlugin( "css/[name].[hash:6].css"), //提取CSS行内样式，转化为link引入
        //new webpack.optimize.UglifyJsPlugin({ // js压缩 生产环境再打开，不然慢
			//compress: {
			//	warnings: false
			//},
			//output: {
			//	comments: false,  // remove all comments
			//}
        //}),
		new webpack.NoErrorsPlugin()
	],
	externals: {
        //$: 'jQuery'
    },
    devtool: false,
	//使用webpack-dev-server服务器，提高开发效率
	devServer: {
		// contentBase: './',
		host: 'localhost',
		port: 8188, //端口
		inline: true,
		hot: false,
		historyApiFallback: true
	}
};

module.exports = config;