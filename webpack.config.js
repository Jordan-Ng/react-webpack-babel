const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js", // defining the entry point of program (dependency graph will also be created from here)
  
  output: {                 // telling webpack the name and location of our bundled file (/absolute_path + dist/bundle.js) during production build
    path: path.join(__dirname, '/dist'),
    filename: "bundle.js"
  },

  plugins: [                // (webpack) specify which html file to inject JS bundles into
    new HTMLWebpackPlugin({
        template: './src/index.html'
    })
  ],

  module: {
    rules: [
        {
            test: /.js$/,            // (transpiler) regex pattern for babel to transpile all files that has the .js extension
            exclude: /node_modules/, // ignore js files in node_modules folder
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']   // notice that this is the preset environment we installed earlier
                }
            }
        }
    ]
  }
};
