/**
 * Sidebars configuration for Image-Charts Documentation
 *
 * Following the Diataxis methodology:
 * - Tutorials: Learning-oriented (step-by-step guides)
 * - Guides: Task-oriented (how-to solve specific problems)
 * - Reference: Information-oriented (technical specifications)
 * - Concepts: Understanding-oriented (explanations and architecture)
 *
 * @see https://diataxis.fr/
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    {
      type: "doc",
      id: "index",
      label: "Getting Started",
    },
    {
      type: "category",
      label: "Chart Types",
      collapsed: false,
      items: [
        "bar-charts",
        "line-charts",
        "pie-charts",
        "polar-charts",
        "radar-charts",
        "bubble-charts",
        "graph-viz-charts",
        "progress-bar-charts",
        "qr-codes",
        "chart-js",
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "doc",
        id: "reference/index",
      },
      items: [
        "reference/chart-type",
        "reference/chart-size",
        "reference/data-format",
        "reference/color-format",
        "reference/chart-title",
        "reference/grid-lines",
        "reference/chart-label",
        "reference/markers",
        "reference/chart-margin",
        "reference/chart-axis",
        "reference/legend-text-and-style",
        "reference/chart-font",
        "reference/background-fill",
        "reference/animation",
        "reference/output-format",
        "reference/post-requests",
        "reference/retina",
        "reference/localization",
      ],
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "doc",
        id: "guides/index",
      },
      items: [
        "guides/graph-in-google-sheets",
        "guides/send-charts-to-slack",
        "guides/salesforce-apex-charts",
        "guides/charts-from-typeform",
      ],
    },
    {
      type: "doc",
      id: "gallery",
      label: "Gallery",
    },
    {
      type: "category",
      label: "Resources",
      items: [
        "enterprise",
        "sdk-and-libraries",
        "on-premise",
        "errors",
        "limits-and-quotas",
      ],
    },
    {
      type: "category",
      label: "External Links",
      items: [
        {
          type: "link",
          label: "Status Page",
          href: "https://status.image-charts.com",
        },
        {
          type: "link",
          label: "Changelog",
          href: "https://headwayapp.co/image-charts-changelog",
        },
        {
          type: "link",
          label: "Chart Editor",
          href: "https://editor.image-charts.com",
        },
      ],
    },
  ],
};

module.exports = sidebars;
