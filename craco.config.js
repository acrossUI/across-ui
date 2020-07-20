const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@component-background': '#1a2434',
              //'@btn-text-hover-bg': 'red',
              //slider
              '@primary-color': '#858FFF',
              '@slider-rail-background-color': '#33354A',
              '@slider-rail-background-color-hover': '#464969',
              '@border-color-base': '#33354A',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
