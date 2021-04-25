const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js'
})

module.exports = withNextra({
    webpack(config) {
        config.plugins.pop(); // remove stork plugin which was added by nextra. Remove when nextra version is bumped!
        return config;
    }
})
