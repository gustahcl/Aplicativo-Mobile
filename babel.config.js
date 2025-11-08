module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // Esta linha é a mais importante:
    plugins: ['nativewind/babel'],
  };
};