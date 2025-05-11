const { clear } = require('console')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                // 链式调用，从右向左执行
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}