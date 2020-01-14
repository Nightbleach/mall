// 简化路径引用问题
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'request': '@/request',
        'views': '@/views'
      }
    }
  },
  'transpileDependencies': [
    'vuetify'
  ]
}
