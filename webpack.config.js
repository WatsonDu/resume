module.exports = {
  entry: './pro.js',
    output: {
        filename: 'bundle.js'
	  },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader','autoprefixer-loader' ]
            }
        ]
    }
	  }
