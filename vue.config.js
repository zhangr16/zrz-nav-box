module.exports = {
  baseUrl: '',

  pages: {
    index: {
      entry: 'example/main.js'
    }
  },

  productionSourceMap: false,

  css: {
    extract: false
  },

  configureWebpack: config => {
    const webpack = require('webpack')
    const version = process.env.VERSION || require('./package.json').version
    const banner = `zrz-nav-box v${version}`
    config.plugins.push(new webpack.BannerPlugin(banner))
  }
}
