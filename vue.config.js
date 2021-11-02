//path模块是node.js中处理路径的核心模块，可以方便的处理关于文件路径的问题
//参考博客https://www.cnblogs.com/jkko123/p/10234362.html
// const path = require('path')
// //join路径拼接
// const resolve = (dir) => path.join(__dirname, dir);
// vue.config.js 配置说明
module.exports = {
  // // 部署生产环境和开发环境下的URL。
  // publicPath: "./",
  // // 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）（默认dist）
  // outputDir: 'dist',
  // // 用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  // assetsDir: 'static',
  // // 是否开启eslint保存检测，有效值：ture | false | 'error'
  // lintOnSave: false,
  // // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  // productionSourceMap: false,

  // /** webpack-dev-server 相关配置*/
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: 'localhost',  //运行时地址
    port: 8002,  //运行端口号
    https: false, //是否使用https协议
    hotOnly: false,   //是否开启热更新

  //   disableHostCheck: true,//关闭host检查
  //   before: (app) => {}
  },

  // 配置别名@
  configureWebpack: {
    //配置路径相关的时候用resolve 可以解决路径相关的问题
    resolve: {
      //别名ps：.vue等相关的其实已经写了，这里只需要写我们自己需要的
      alias: {
        //默认有@  他指向的是：src
      }
    }
  }

}
