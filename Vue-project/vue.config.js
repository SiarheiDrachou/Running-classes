module.exports = {
    publicPath: '.',
    configureWebpack:{
        devtool: 'nosources-source-map'
    },
    devServer: {
        proxy: {
          '^/api': {
            target: 'http://localhost:3000',
            changeOrigin: true
          },
        }
      }
    
}