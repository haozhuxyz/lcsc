const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
  // proxy代理    
    proxy("/proxy", {
      target: "https://www.linkpet.com.cn/Mobile/",
      changeOrigin: true,
      pathRewrite: {
        "^/proxy": ""
      }
    })
  );
};
