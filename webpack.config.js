const path = require('path');

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
  {
    test: /\.(sass|less|css)/,
    use: ['style-loader', 'css-loader'],
  },
];

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: { rules },
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
    contentBase: './',
    port: 8080,
  },
};
