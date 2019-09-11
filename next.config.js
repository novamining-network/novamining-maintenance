const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const path = require('path');

const nextConfig = {
  distDir: 'build',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
  webpack(config, { dev }) {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: ['/node_modules/', '/.next/', '/out/'],
        enforce: 'pre',
        options: {
        emitWarning: true,
        },
      })
    }
    return config
  },
};

module.exports = withPlugins([withSass, withCSS, withImages], nextConfig);
