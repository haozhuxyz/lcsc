const proxy = require("http-proxy-middleware");
module.exports = function(app){
    app.use(proxy("/detail",{
        target:"https://www.linkpet.com.cn",
        changeOrigin:true,
    }))
}