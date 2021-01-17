const path = require("path");
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname,"dist"),
		filename: "main.bundle.js"
	},
	watch: true,
  	module: {
  		rules:[{
  			// burda webpack transpiler islemleri yaptik
  			test: [/.js$/], // test => Hangi dosya tiplerinin işlemden geçeceğini belirttiğimiz property
  			exclude: /(node_modules)/, // exclude => Hangi klasorlerin islemden gecmeyecegini belittik
  			use:{
  				loader: 'babel-loader',
  				options:{
  					presets: ['@babel/preset-env']
  				}
  			},
  			// burda scss dosyalarini kullanmak icin olusturduk
  			test: /\.(s[ac]ss|less)$/,
  			use:[
  				'style-loader',
                'css-loader',
                'less-loader',
                'sass-loader']
  		}]
  	},
	plugins: [
	    new HtmlWebpackPlugin({
	      template: './src/template/root.pug',
	      filename: 'root.pug'
	    }),
	    new CleanWebpackPlugin(),
  	]
};