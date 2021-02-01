module.exports = {
  title: 'EOSIO Enterprise Blockchain Development Services -  EOS Costa Rica',
  tagline: '',
  url: 'https://eoscostarica.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'eoscostarica',
  projectName: 'eoscostarica.io',
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
    metadatas: [
      {name: 'title', content: 'EOSIO Enterprise Blockchain Development Services - EOS Costa Rica'},
      {name: 'description', content: 'Deploy EOSIO blockchain technology to improve transparency, boost efficiency, and reduce costs. Start transforming your organization by leveraging enterprise blockchain networks.'},
      {name: 'og:type', content: 'website'},
      {name: 'og:url', content: 'https://eoscostarica.io/'},
      {name: 'og:title', content: 'EOSIO Enterprise Blockchain Development Services - EOS Costa Rica'},
      {name: 'og:description', content: 'Deploy EOSIO blockchain technology to improve transparency, boost efficiency, and reduce costs. Start transforming your organization by leveraging enterprise blockchain networks.'},
      {name: 'og:image', content: 'https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/eoscr-logo.png'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:url', content: 'https://eoscostarica.io/'},
      {name: 'twitter:title', content: 'EOSIO Enterprise Blockchain Development Services - EOS Costa Rica'},
      {name: 'twitter:description', content: 'Deploy EOSIO blockchain technology to improve transparency, boost efficiency, and reduce costs. Start transforming your organization by leveraging enterprise blockchain networks.'},
      {name: 'twitter:image', content: 'https://raw.githubusercontent.com/eoscostarica/eoscostarica.io/master/static/img/eoscr-logo.png'},
  ],
    footer: {},
    googleAnalytics: {
      trackingID: "UA-173987-66",
    }
  }
};
