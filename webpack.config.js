const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/* 
  폴리필 전역설정 X, nodemodules 하위 npm 모듈에서 에러가 발생하면 해당 모듈 아래와 같이 정규식에서 제외 
  exclude: /node_modules\/(?!(axios|@redux-saga|redux-logger))/
*/

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
      // name: 'img/[name].[ext]?[hash]',
      name: 'img/[name].[ext]',
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
  const devtool = arg.mode === 'development' ? 'inline-source-map' : 'source-map';
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
        app: path.resolve(__dirname, 'src', 'app'),
        components: path.resolve(__dirname, 'src', 'components'),
        containers: path.resolve(__dirname, 'src', 'containers'),
        helpers: path.resolve(__dirname, 'src', 'helpers'),
        config: path.resolve(__dirname, 'src', 'config'),
        data: path.resolve(__dirname, 'src', 'data'),
      },
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 8080,
      historyApiFallback: true,
      hot: true,
    },
    devtool,
  };
};
