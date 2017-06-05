const merge = require('webpack-merge')
let webpackConfig = merge(require('../../webpack.conf'), {
  devtool: '#inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': '"testing"'
    })
  ]
})

// no need for app entry during tests
delete webpackConfig.entry
module.exports = function(config){
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    // http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['Chrome'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
