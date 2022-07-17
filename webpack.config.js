const path = require('path');

const NODE_ENW = process.cross-env.NODE_ENW;

module.exports = {
  mode: NODE_ENW ? NODE_ENW : 'development',
  resolve:{
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  entry: path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
    }]
  }
};
