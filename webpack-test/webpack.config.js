const path = require('path');

module.exports = {
    entry:{
        app:'./index.js'
    },
    mode:"none",
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,'./dist')
    },
    devServer:{
        open: {
            app:['Chrome','--incognito']
        }
    }
}