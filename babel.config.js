module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        alias: {
          actions: './src/actions',
          checklist: './src/components/checklist',
          common: './src/components/common',
          constants: './src/constants',
          contexts: './src/contexts',
          data: './src/data',
          form: './src/components/form',
          hooks: './src/hooks',
          icons: '@expo/vector-icons',
          images: './assets/images',
          reducers: './src/reducers',
          screens: './src/components/screens'
        }
      }]
    ]
  };
};
