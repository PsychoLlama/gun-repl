/*jslint node: true*/
module.exports = {
  entry: './index.js',
  output: {
    path: process.cwd(),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
