const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rules = [
  {
    test: /\.tsx?/i,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.(sass|scss|less|css)/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  },
  {
    test: /\.(jpg|jpeg|gif|png|svg|ico)/i,
    loader: 'url-loader',
    options: {
      name: 'images/[name].[ext]?[hash]',
      fallback: 'file-loader',
      limit: 8192,
    },
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)/i,
    loader: 'url-loader',
    options: {
      name: 'fonts/[name].[ext]',
      fallback: 'file-loader',
      limit: 8192,
    },
  },
];

module.exports = (env, arg) => {
  return {
    target: 'web',
    mode: arg.mode,
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
        styles: path.resolve(__dirname, 'styles'),
        app: path.resolve(__dirname, 'src/app'),
        components: path.resolve(__dirname, 'src/components'),
        containers: path.resolve(__dirname, 'src/containers'),
        helpers: path.resolve(__dirname, 'src/helpers'),
      },
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 8080,
      historyApiFallback: true,
    },
  };
};
