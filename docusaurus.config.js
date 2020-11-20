module.exports = {
  title: 'Servicios de desarrollo de blockchain empresarial EOSIO - EOS Costa Rica',
  tagline: '',
  url: 'https://es.eoscostarica.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'eoscostarica',
  projectName: 'es.eoscostarica.io',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          editUrl:
            'https://github.com/eoscostarica/es.eoscostarica.io/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/eoscostarica/es.eoscostarica.io/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: "UA-173987-66",
    }
  }
};
