const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.(sass|less|css)/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
];

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: { rules },
  plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }), new CleanWebpackPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      public: path.resolve(__dirname, 'public'),
      app: path.resolve(__dirname, 'src/app'),
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      helpers: path.resolve(__dirname, 'src/helpers'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
  },
};
