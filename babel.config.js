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
          contexts: './src/contexts',
          data: './src/data',
          form: './src/components/form',
          hooks: './src/hooks',
          icons: '@expo/vector-icons',
          images: './assets/images',
          screens: './src/components/screens'
        }
      }]
    ]
  };
};
