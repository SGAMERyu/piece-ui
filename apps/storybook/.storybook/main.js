const path = require('path')

const lessRegex = /\.less$/
const lessModuleRegex = /\.module\.less$/

function getLoaderForStyle(cssOptions) {
  return [
    {
      loader: 'style-loader'
    },
    {
      loader: 'css-loader',
      options: cssOptions
    },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  ]
}

module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|vue)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    config.resolve.alias['@piece-ui'] = path.resolve(process.cwd(), '../piece-ui')

    // less
    config.module.rules.push({
      test: lessRegex,
      exclude: lessModuleRegex,
      use: getLoaderForStyle()
    })

    // less css modules
    config.module.rules.push({
      test: lessModuleRegex,
      use: getLoaderForStyle({ modules: true })
    })

    return config
  }
}
