module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          common: './src/components/common',
          constants: './src/constants',
          images: './assets/images',
          screens: './src/components/screens'
        }
      }]
    ]
  };
};
