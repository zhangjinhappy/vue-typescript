module.exports = {
  // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: "assets",
  filenameHashing: false,
  lintOnSave: false,
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: false,
  transpileDependencies:[],
  productionSourceMap: false,
  crossorigin:undefined,
 //默认情况下，只有以文件结尾的文件*.module.[ext]才会被视为CSS模块。将此设置为true允许您.module放入文件名并将所有*.(css|scss|sass|less|styl(us)?)文件视为CSS模块。
 //extract true在生产中，false在开发中,是否将组件中的CSS提取到独立的CSS文件中（而不是在JavaScript中内联并动态注入,在开发模式下禁用提取CSS，因为它与CSS热重新加载不兼容
 //sourceMap是否为CSS启用源映射。将此设置为true可能会影响构建性能
//将选项传递给与CSS相关的加载器
 css:{
   modules:false,
   extract:true,
   sourceMap:false,
   loaderOptions:{
        css: {
        // options here will be passed to css-loader
      },
      postcss: {
        // options here will be passed to postcss-loader
      }
    }
   },
 
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "localhost",
    port: 3000, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    overlay: {
      warnings: false,
      errors: false
    },
    // proxy: 'http://localhost:9000' // 配置跨域处理,只有一个代理
    // 配置多个代理
    proxy: {
      "/api": {
        target: " ",//目标主机 
        changeOrigin: true,//需要虚拟主机站点 
        pathRewrite: {
          '^/api': '/api'
        }
      },
      "/api2": {
        target: "<other_url>"
      }
    }
  }
}
