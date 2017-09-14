const path = require('path');

module.exports = {
  // This is the entry point into the application,
  // webpack will use to figure out what javascript files are needed for our application
  entry: './app.js',

  output: {
    // This is telling webpack where we want our "bundle" to end up
    // In this case we want it to go in a dist/bundle.js
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },

  devtool: 'cheap-module-eval-source-map',

}