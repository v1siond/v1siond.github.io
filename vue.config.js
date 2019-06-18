module.exports = {
  devServer: {
    proxy: 'http://localhost:4000',
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.ts?$/,
          exclude: [
            /node_modules/
          ],
          use: {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        }
      ]
    }
  }
}