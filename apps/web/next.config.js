const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname),
      'ui': path.resolve(__dirname, '../../packages/ui'),
      '@manga/tailwind-config': path.resolve(__dirname, '../../packages/tailwind-config'),
    };

    return config;
  },
};
