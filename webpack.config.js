const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')
//a plugin extends the behaviour of webpack.

module.exports = {
    entry: 'C:/Users/deeks/OneDrive/Documents/Rust_projects/image_effects/public/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template : './public/index.html'
            // C:/Users/deeks/OneDrive/Documents/Rust_projects/image_effects/public/index.html
        }),

        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname, '.') //this should return the root directory of our project. and this will search for the cargo.toml file.
        })
    ],
    experiments: {
        asyncWebAssembly: true,
    },  
};