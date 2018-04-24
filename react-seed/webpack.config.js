var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, '../play-seed/public/build/')
var APP_DIR = path.resolve(__dirname, 'app')

var BUILD_ENV = process.env.NODE_ENV || 'development'
var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '',
    filename: 'bundle.js'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    noParse: /\.min\.js$/,
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./app')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(BUILD_ENV)
      }
    })
  ]
  // plugins: plugins
}

if (BUILD_ENV === 'production') {
  // add compressing to the production build
  config.plugins.push(new webpack.NoErrorsPlugin())
  // config.plugins.push(new webpack.OccurenceOrderPlugin())
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }))
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin())
}

config.module.loaders.push(
  {
    test: /\.woff(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
  },
  {
    test: /\.otf(\?.*)?$/,
    loader: 'file?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=font/opentype'
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url?prefix=fonts/&name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.eot(\?.*)?$/,
    loader: 'file?prefix=fonts/&name=fonts/[name].[ext]'
  },
  {
    test: /\.svg(\?.*)?$/,
    loader: 'url?prefix=images/&name=images/[name].[ext]&limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.(png|jpg|gif)$/,
    loader: 'url?limit=100000&name=images/[name].[ext]'
  }
)

module.exports = config
