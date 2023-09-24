const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = true;

module.exports = {
	mode: devMode ? "development" : "production",
	devtool: devMode ? "inline-source-map" : "source-map",
	entry: { index: "./src/index.js" },
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Template Title", // <--- Rename!
			template: "./src/index.html",
		}),
	].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
				],
			},
		],
	},
};
