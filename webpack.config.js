const path = require("path");
const resolve = url => path.resolve(__dirname, url);

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx", // 项目入口
  output: { // 编译打包后的项目输出
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  devServer: { // 开发服务器配置
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
    proxy: { // 转发，把路径转发到服务器路径避免跨域
      // '/api': {
      //   target: '',
      //   pathRewrite: {
      //     '^/api': '',
      //   },
      //   changeOrigin: true,
      //   secure: true
      // }
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: { // 路径别名，写起来更优雅
      "@": resolve("src"),
      "pages": resolve("src/pages"),
      "components": resolve("src/components"),
      "config": resolve("src/config"),
      "common": resolve("src/common"),
    }
  },
  devtool: "source-map",
  module: {
    rules: [ // 配置解析规则，为被正则匹配到的文件指定不同的loader
      { test: /\.less$/, use: [ "style-loader", "css-loader", "less-loader" ] },// loader链，从右至左解析输出文件
      { test: /\.tsx?$/, loader: "babel-loader" },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({ // 使用插件把public中的内容复制到dist中
      patterns: [{
        from: 'public/**/*',
        to: path.join(__dirname, 'dist/[name][ext]'),
      }]
    })
  ]
};