module.exports = {
  entry: {
    'bundle': './app/main.js',
  },

  output: {
    path: './',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      // required for react jsx
      { test: /\.react.js$/, loader: 'jsx-loader' },
    ],
  },
}
