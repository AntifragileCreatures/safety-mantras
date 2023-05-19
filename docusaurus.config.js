// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Poetry',
  url: 'https://antifragilecreatures.github.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rbt.ico',
  //organizationName: 'antifragilecreatures', // Usually your GitHub org/user name.
  projectName: 'safety-mantras', // Usually your repo name.
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          //editUrl:
          //  'https://github.com/AntifragileCreatures/safety-mantras',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'My Site',
        /* logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        }, */
        items: [
          {
            type: 'doc',
            docId: 'safety-mantras/english-poetry',
            position: 'left',
            label: 'Safety Mantras',
          },
          /* {
            href: 'https://github.com/AntifragileCreatures/safety-mantras',
            label: 'GitHub',
            position: 'right',
          }, */
          /* {
            to: '/development',
            docId: 'development/git',
            label: 'Development',
          }, */
          /* {
            type: 'doc',
            docId: 'development/git',
            position: 'left',
            label: 'Development',
          } */
        ],
      },
      footer: {
        /* style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ], */
        copyright: `Poetry is life distilled in verse.`,
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

