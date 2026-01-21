// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Image-Charts Documentation",
  tagline: "Generate chart images from a URL. Embed charts in emails, PDF reports, and more.",
  favicon: "img/favicon.ico",

  url: "https://documentation.image-charts.com",
  baseUrl: "/",

  organizationName: "image-charts",
  projectName: "documentation",

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  clientModules: [require.resolve("./src/editor.js")],

  themes: [
    "@docusaurus/theme-mermaid",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: "/",
        indexBlog: false,
        searchBarShortcutHint: true,
        searchBarPosition: "right",
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/image-charts/documentation/edit/master/docusaurus/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/social-card.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Image-Charts",
        logo: {
          alt: "Image-Charts Logo",
          src: "img/logo.svg",
          href: "https://www.image-charts.com",
          target: "_self",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            to: "/reference",
            label: "Reference",
            position: "left",
          },
          {
            to: "/guides",
            label: "Guides",
            position: "left",
          },
          {
            href: "https://editor.image-charts.com",
            label: "Chart Editor",
            position: "right",
            className: "navbar-editor-link",
          },
          {
            href: "https://github.com/image-charts",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              { label: "Getting Started", to: "/" },
              { label: "Chart Types", to: "/bar-charts" },
              { label: "Reference", to: "/reference" },
              { label: "Guides", to: "/guides" },
            ],
          },
          {
            title: "Resources",
            items: [
              { label: "Gallery", to: "/gallery" },
              { label: "Enterprise", to: "/enterprise" },
              { label: "SDK & Libraries", to: "/sdk-and-libraries" },
              { label: "Errors", to: "/errors" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "Status Page", href: "https://status.image-charts.com" },
              { label: "Changelog", href: "https://headwayapp.co/image-charts-changelog" },
              { label: "Chart Editor", href: "https://editor.image-charts.com" },
              { label: "GitHub", href: "https://github.com/image-charts" },
            ],
          },
          {
            title: "Contact",
            items: [
              { label: "Support", href: "mailto:support@image-charts.com" },
              { label: "Twitter", href: "https://twitter.com/imagecharts" },
              { label: "Stack Overflow", href: "https://stackoverflow.com/questions/tagged/image-charts" },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Image-Charts. All rights reserved.`,
      },
      prism: {
        theme: require("prism-react-renderer").themes.github,
        darkTheme: require("prism-react-renderer").themes.dracula,
        additionalLanguages: [
          "bash",
          "json",
          "yaml",
          "python",
          "javascript",
          "typescript",
          "php",
          "ruby",
          "java",
          "csharp",
          "sql",
        ],
      },
      mermaid: {
        theme: { light: "neutral", dark: "dark" },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

module.exports = config;
