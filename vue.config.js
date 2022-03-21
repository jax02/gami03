// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   devServer: {
//     host: '0.0.0.0',
//     port: 6103,
//     client: {
//       WebSocketURL: 'ws://0.0.0.0:6103/ws'
//     },
//     headers:{
//       'Access-Control-Allow-Origin':'*',
//     }
//   },
//   transpileDependencies: true
// })
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// vue.config.js file to be placed in the root of your repository
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/gami03/'
    : '/'
}
