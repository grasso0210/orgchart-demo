module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/orgchart-demo/' : '/',

  lintOnSave: process.env.NODE_ENV !== 'production'
}
