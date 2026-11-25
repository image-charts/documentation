---
title: Chart gallery, image chart examples to copy as a URL
sidebar_label: Gallery
description: "Chart images made with the Image-Charts API: bar, line, area, pie, doughnut, radar, polar, bubble, scatter, QR code and GraphViz. Click a chart to open its URL and reuse it."
sidebar_position: 12
---

import GeneratedGallery from './GENERATED-gallery.md';

# Chart gallery

Every image on this page is a chart rendered by the Image-Charts API from a single URL. Click a chart to open its URL, copy it, then change the data (`chd`) and labels (`chl`) to make it yours. The same URL works in an `<img>` tag, an email, a Slack message or a PDF report.

Jump to a chart type, or read its documentation:

| Chart type | Gallery | Documentation |
|---|---|---|
| Bar charts | [examples](#bar-charts) | [bar charts](/bar-charts) |
| Line and area charts | [line](#line-charts), [area](#area-charts) | [line charts](/line-charts) |
| Pie and doughnut charts | [pie](#pie-charts), [doughnut](#doughnut-charts) | [pie charts](/pie-charts) |
| Radar charts | [examples](#radar-charts) | [radar charts](/radar-charts) |
| Polar area charts | [examples](#polar-charts) | [polar area charts](/polar-charts) |
| Bubble and scatter charts | [bubble](#bubble-charts), [scatter](#scatter-charts) | [bubble charts](/bubble-charts) |
| QR codes | [examples](#qr-codes) | [QR codes](/qr-codes) |
| GraphViz diagrams | [examples](#graphviz-charts) | [GraphViz charts](/graph-viz-charts) |
| Chart.js charts | most charts below | [Chart.js](/chart-js) |

Most charts below (48 of 60 on 25 November 2026) are [Chart.js](/chart-js) configurations rendered at `/chart.js/2.8.0`; the others use the Google Image Charts compatible `/chart` endpoint.

<GeneratedGallery />

## FAQ

### Can I reuse a chart from the gallery?

Yes. Click the chart, copy its URL and replace the data and labels with yours. The gallery URLs are signed for this documentation (`icac` and `ichm` parameters). Remove both before you edit the URL, then sign it with your own account if you are on a paid plan (see [signing URLs](/enterprise#remove-image-charts-watermark-by-signing-urls)).

### Which chart types does Image-Charts support?

Bar, line, area, pie, doughnut, radar, polar area, bubble, scatter and combo charts, QR codes and GraphViz diagrams, plus any Chart.js 2.8 chart through `/chart.js/2.8.0`.

### What format are the gallery images?

PNG. Bar, line, pie, radar, polar and bubble charts can also be returned as an animated GIF with `&chan` (see [animation](/reference/animation)), and QR codes and GraphViz diagrams as SVG with `chof=.svg`.
