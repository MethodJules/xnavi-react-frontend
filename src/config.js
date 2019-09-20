//VON D8 REACT
//export default {
  // copy this file to config.js and edit the settings to match yours
  //drupal_url: 'http://my-drupal-8-site.com'
//}

const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    isBrowser: typeof window !== 'undefined',
  },
  test: {},
  development: {},
  production: {},
}

module.exports = merge(config.all, config[config.all.env])

