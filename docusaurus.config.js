const path = require('path');
module.exports = {
  title: 'EOSIO Enterprise Blockchain Development Services -  EOS Costa Rica',
  tagline: '',
  url: 'https://eoscostarica.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'eoscostarica',
  projectName: 'eoscostarica.io',
  plugins: [path.resolve(__dirname + "/plugins/", 'my-loaders')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          editUrl:
            'https://github.com/eoscostarica/eoscostarica.io/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/eoscostarica/eoscostarica.io/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    footer: {},
    googleAnalytics: {
      trackingID: "UA-173987-66",
    }
  }
};
