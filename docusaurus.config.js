// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aexum User Manual',
  tagline: 'Aexum.UserManual',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://app-manual.aexum.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Nodefusion', // Usually your GitHub org/user name.
  projectName: 'Aexum.UserManual', // Usually your repo name.

  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Nodefusion/Aexum.UserManual/tree/main/',
        },
        gtag: {
          trackingID: 'G-7GL4J3XNGG'
        },
        googleTagManager: {
          containerId: 'GTM-5QZP95RS'
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/aexum-logo.png',
      navbar: {
        title: 'Aexum User Manual',
        logo: {
          alt: 'Aexum',
          src: 'img/aexum-logo-heading-light.svg',
          srcDark: 'img/aexum-logo-heading-dark.svg',
        },
        items: [
          {
            href: 'https://github.com/Nodefusion/Aexum.UserManual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        appId: 'T17L45VSEH',
        apiKey: '8c2a6c856776945b60f394e86e124a66',
        indexName: 'app-manual-aexum',
        insights: true,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Aexum',
                href: 'https://www.aexum.com/',
              },
              {
                label: 'Nodefusion',
                href: 'https://www.nodefusion.com/',
              },              
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Nodefusion',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/Nodefusion',
              },
              {
                label: 'X',
                href: 'https://x.com/Nodefusion',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Aexum',
                href: 'https://app.aexum.com/'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Nodefusion'
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nodefusion`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
