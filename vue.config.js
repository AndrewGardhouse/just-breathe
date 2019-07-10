module.exports = {
  baseUrl: 'https://justbreathe.app',
  outputDir: 'docs',
  pwa: {
    name: 'Just Breathe',
    display: 'fullscreen',
    backgroundColor: '#fffbf7',
    themeColor: '#fffbf7',
    msTileColor: '#fffbf7',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      msTileImage: 'img/icons/msapplication-icon-144x144.png',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /manifest\.json$/,
      ],
    },
  },
};
