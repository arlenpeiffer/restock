module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          checklist: './src/components/checklist',
          common: './src/components/common',
          constants: './src/constants',
          data: './src/data',
          form: './src/components/form',
          images: './assets/images',
          screens: './src/components/screens'
        }
      }]
    ]
  };
};
