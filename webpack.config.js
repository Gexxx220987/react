const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
enty:"./src/index.js"
output: {
    path: path.join(__dirname, "/dist"),
    filname: "bundle.js"
},
module:{
    rules:[
        {
            test: /\.js$/,
            use: {
                loader: "babel-loader"
            }
        },
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
    ]
},
plugins: [
    new HtmlWebpackPlugin(options: {
        template: "./src/index.html"
    })
]

}