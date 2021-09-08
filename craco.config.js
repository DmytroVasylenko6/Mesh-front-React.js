const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#6236ff',
              '@link-color': '#0a2439',
              '@line-height-base': '140%',
              '@text-color': '#0a2439',
              '@text-color-opacity': '#0a24397b',
              '@text-color-white': '#ffffff',
              '@body-background': '#f8f9fa',
              '@border-radius-base': '8px',
              '@background-component-second': '#6236ff',
              '@btn-line-height': '140%',
              '@btn-height-base': '100%',
              '@btn-default-color': '#0a24397b',
              '@btn-default-border': 'none',
              '@input-height-base': '50px',
              '@input-placeholder-color': '#0a2439',
              '@input-bg': '#ffffff',
              '@checkbox-check-color': '#ffffff',
              '@radio-button-bg': 'rgba(120, 120, 128, 0.36)',
              '@radio-button-checked-bg': '#6236ff',
              '@radio-button-color': '#ffffff',
              '@form-item-margin-bottom': '0',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
