const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {

  entry: ['./src/js/app.js', './src/scss/global.scss'],
  mode: 'development',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  mode: "development",
    plugins: [
        new MiniCssExtractPlugin()
    ],
   
    module: {
        rules: [
      
            {
                test: /\.s[ac]ss$/i,
                use: [ MiniCssExtractPlugin.loader, "css-loader","sass-loader", "postcss-loader"],
              },
          ]
    },
    
    resolve: {
      extensions: ['.js', '.scss']
    },
    
  }